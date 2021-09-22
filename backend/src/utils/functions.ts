import logger from './Logger';
import crypto from "crypto";
import jwt from 'jsonwebtoken';

export const pErr = (err: Error) : void => {
    if (err) {
        logger.error(err);
    }
};

export const getRandomInt = () : number => {
    return Math.floor(Math.random() * 1_000_000_000_000);
};

export const hashPassword = (password: string, salt: string): Promise<string> => new Promise((resolve, reject) => {
    crypto.pbkdf2(password, salt, 10, 256, 'sha256',  (error, hash) => {
        if(error) {
            logger.error(error)
            reject(error)
        }

        resolve(hash.toString())
    })
})

export const createJWT = (payload: any) => {
    const secret = process.env.JWT_SECRET ?? '';
    return jwt.sign(payload, secret)
}

export const validateJWT = (token: any) => {
    const secret = process.env.JWT_SECRET ?? '';
    return jwt.verify(token, secret)
}
