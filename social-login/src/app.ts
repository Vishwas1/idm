import express, {Application, Request, Response} from 'express';
import { port } from './config';

const courses = [
    {id: 1, name: "course 001"},
    {id: 2, name: "course 002"},
]

const app: Application = express()
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
    res.send('Hello!')
});
 
app.get('/api/courses', (req: Request, res: Response) => {
    res.send(courses)
})

app.post('/api/courses', (req, res) => {
    if(!req.body.name) return res.status(400).send('Error: Name is required')
    const course =  {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course)
})

app.put('/api/courses/:id', (req, res) => {
    const id = req.params.id;
    let course = courses.find(c => c.id === parseInt(id))
    if(!course) return res.status(404).send(`The course with ${id} not found!`)
    if(!req.body.name) return res.status(400).send('Error: Name is required')
    course.name = req.body.name;
    res.send(course)
})

app.get('/api/courses/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    const course = courses.find(c => c.id === parseInt(id))
    if(!course) res.status(404).send(`The course with ${id} not found!`)
    res.send(course)
})

app.get('/api/posts/:year/:id', (req: Request, res: Response) => {
    res.send({
        params: req.params,
        query: req.query
    })
})

app.listen(port, () => console.log(`The server is running on port ${port}`))

