import express, {Application, Request, Response} from 'express';
import { port } from './config';
import courseRoutes from './routes/courses'
import postsRoutes from './routes/blogs'

const app: Application = express()
app.use(express.json())

app.use('/api/courses', courseRoutes)
app.use('/api/posts', postsRoutes)


app.get('/', (req, res) => {
    res.send('Hello!')
})


app.listen(port, () => console.log(`The server is running on port ${port}`))

