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
import { hashPassword } from "../login";

const validator = createValidator({});
const router = Router();

const bodySchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

interface SignupRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Body]: {
    username: string;
    password: string;
  };
}

router.get("/", validator.body(bodySchema), async (req: ValidatedRequest<SignupRequestSchema>, res) => {
    try {
        const { username, password } = req.body;
        const salt = process.env.salt ?? "";    
        const hash = await hashPassword(password, salt)

        const user = users.insert({ username, password: hash })
        if(!user) {
            return res.status(500).json({
                fail: 'Something went wrong. Please verify and try again'
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
