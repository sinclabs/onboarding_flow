import { Request, Response } from 'express'
import { BAD_REQUEST, OK } from 'http-status-codes'

import { paramMissingError, } from 'src/utils/constants'
import { Resource } from 'src/entities/resource'
import logger from "src/utils/Logger"

export default async (req: Request, res: Response) => {
    const { param } = req.params
    const requestBody = req.body
    if (!param) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        })
    }

    const resource: Resource = {}

    res.status(OK).json({
        value: resource,
    })
}