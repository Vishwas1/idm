import { Router, Request, Response } from 'express'

const router =  Router()


router.get('/', (req: Request, res: Response) => {
    res.send('All posts')
})

router.get('/:year/:id', (req: Request, res: Response) => {
    res.send({
        params: req.params,
        query: req.query
    })
})

export default router
