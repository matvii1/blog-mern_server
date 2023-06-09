import express from 'express'
import authController from '../controllers/authController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
import { validateMiddleware } from '../middlewares/validateMiddleware.js'
import { registerValidation } from '../validations/postValidation.js'

const router = express.Router()

router.post(
  '/register',
  registerValidation,
  validateMiddleware,
  authController.register
)
router.post('/login', authController.login)
router.get('/me', authMiddleware, authController.getInfo)

export default router
