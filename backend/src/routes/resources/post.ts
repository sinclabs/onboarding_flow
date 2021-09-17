import { Request, Response } from 'express'
import { BAD_REQUEST, CREATED } from 'http-status-codes'

import { paramMissingError } from 'src/utils/constants'
import { Resource } from 'src/entities/resource'
import logger from 'src/utils/Logger'

export default async (req: Request, res: Response) => {    
    const {
        param,
    }: {param: string} = req.body;

    if (!param) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }

    const resource: Resource = {}

    return res.status(CREATED).json({
        value: resource,
    })
}
