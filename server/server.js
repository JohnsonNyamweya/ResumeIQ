import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/db.js'
import userRouter from './routes/userRoutes.js'
import resumeRouter from './routes/resumeRoutes.js'
import aiRouter from './routes/aiRoutes.js'

const app = express() 
const PORT = process.env.PORT || 4000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send("API working!")
})
app.use('/api/users', userRouter)
app.use('/api/resumes', resumeRouter)
app.use('/api/openai', aiRouter)

//connnect db and Server
connectDB().then(() => app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
}))