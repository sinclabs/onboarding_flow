import { Request, Response } from 'express'
import { BAD_REQUEST, OK } from 'http-status-codes'

import { deleted, paramMissingError } from 'src/utils/constants'
import logger from 'src/utils/Logger';


export default async (req: Request, res: Response) => {
    const { param } = req.params;

    if(!param) {
        res.status(BAD_REQUEST).json({
            error: true,
            value: paramMissingError,
        })
    }
    
    res.status(OK).json({
        value: {
            message: deleted
        },
    })
}