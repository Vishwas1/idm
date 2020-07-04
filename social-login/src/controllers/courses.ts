import { Request, Response } from 'express'
const courses = [
    {id: 1, name: "course 001"},
    {id: 2, name: "course 002"},
]

const getAllCourses = (req: Request, res: Response) => {
    res.send(courses)
}

const getACourse = (req: Request, res: Response) => {
    const id = req.params.id;
    const course = courses.find(c => c.id === parseInt(id))
    if(!course) res.status(404).send(`The course with ${id} not found!`)
    res.send(course)
}

const addCourse = (req: Request, res: Response) => {
    if(!req.body.name) return res.status(400).send('Error: Name is required')
    const course =  {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.status(201).send(course)
}

const updateCourse = (req: Request, res: Response) => {
    const id = req.params.id;
    let course = courses.find(c => c.id === parseInt(id))
    if(!course) return res.status(404).send(`The course with ${id} not found!`)
    if(!req.body.name) return res.status(400).send('Error: Name is required')
    course.name = req.body.name;
    res.send(course)
}

export default {
    getAllCourses,
    addCourse,
    updateCourse,
    getACourse
}