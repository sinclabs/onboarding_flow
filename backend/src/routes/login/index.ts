import { Router } from "express";
import Joi from "joi";
import {
    ContainerTypes,
    createValidator,
    ValidatedRequest,
    ValidatedRequestSchema,
} from "express-joi-validation";

import logger from "src/utils/Logger";
import { users } from "src/db";
import { createJWT, hashPassword } from "src/utils/functions";

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
        const token = createJWT({ username: user.username, id: user.id })
        logger.info(token)
        res.json({
            success: token
        })
    } catch (error) {
        logger.error(error)
        res.json({ error })
    }
});

export default router;
