import { Router } from 'express'
import expressBasicAuth from 'express-basic-auth'

import { all, one } from './get'
import post from "./post"
import put from "./put"
import deleteMethod from "./delete" // delete is a keyword!

const router = Router()

// Authentication
const { EXPRESS_USERNAME, EXPRESS_PASSWORD } = process.env
router.use('*', expressBasicAuth({users: { [EXPRESS_USERNAME as string]:  EXPRESS_PASSWORD as string}}))

router.get('/', all);
router.get('/:param', one);
router.post('/', post);
router.put('/:param', put);
router.delete('/:param', deleteMethod);

export default router;
