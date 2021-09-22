import { Router } from "express";
import Joi from "joi";
import {
    ContainerTypes,
    createValidator,
    ValidatedRequest,
    ValidatedRequestSchema,
} from "express-joi-validation";
import crypto from "crypto";

import logger from "src/utils/Logger";
import { users } from "src/db";

const validator = createValidator({});
const router = Router();

const bodySchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

interface LoginRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    username: string;
    password: string;
  };
}

export const hashPassword = (password: string, salt: string): Promise<string> => new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, 10, 256, 'sha256',  (error, hash) => {
        if(error) {
            logger.error(error)
            reject(error)
        }

        resolve(hash.toString())
    })
})

router.get("/", validator.body(bodySchema), async (req: ValidatedRequest<LoginRequestSchema>, res) => {
    try {
        const { username, password } = req.body;
        const salt = process.env.salt ?? "";    
        const hash = await hashPassword(password, salt)

        const user = users.findOne({ username, password: hash })
        if(!user) {
            return res.status(404).json({
                fail: 'Credentials don\'t exist. PLease verify and try again'
            })
        }
        res.json({
            success: true
        })
    } catch (error) {
        logger.error(error)
        res.json({ error })
    }
});

export default router;
