import { Router, Request, Response } from 'express'
import coursesController from '../controllers/courses'
const router = Router()
router.get('/', coursesController.getAllCourses)
router.get('/:id', coursesController.getACourse)
router.post('/', coursesController.addCourse)
router.put('/:id', coursesController.updateCourse)
export default router


