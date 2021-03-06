import './LoadEnv' // Must be the first import
import app from './Server'
import logger from './utils/Logger'

// Start the server
const port = Number(process.env.PORT || 6000)
app.listen(port, () => {
    logger.info('REST API Server started on port: ' + port)
});
