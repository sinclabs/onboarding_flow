import { Request, Response } from 'express'
import { OK, BAD_REQUEST } from 'http-status-codes'

import { Resource } from "src/entities/resource"
import { paramMissingError } from 'src/utils/constants'
import logger from 'src/utils/Logger'

const all = async (_req: Request, res: Response)  => {
    const resources: Array<Resource> = []

    return res.status(OK).json({
        value: resources
    });
}

const one = async (req: Request, res: Response) => {
    console.log(req.params);
    const { param } = req.params;
    
    if(!param) {
        return res.status(BAD_REQUEST).json({
            error: true,
            value: paramMissingError,
        })
    }

    const resource: Resource = {}

    res.status(OK).json({
        value: resource,
    })
}

export { all, one }
