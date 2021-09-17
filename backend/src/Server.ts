import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'

import express, { Request, Response, NextFunction } from 'express'
import { BAD_REQUEST } from 'http-status-codes'

import BaseRouter from './routes'
import logger from './utils/Logger'

// Init express
const app = express()
app.disable("x-powered-by")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

// Show routes called in console during development
if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'staging') {
    app.use(morgan('dev'))
}

// Security
if (process.env.NODE_ENV === 'production') {
    app.use(helmet())
}

// Add APIs
app.use('/api/v1/', BaseRouter)

// Print API errors
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message, err)
    return res.status(BAD_REQUEST).json({
        error: true,
        value: err.message,
    })
})

// Export express instance
export default app
