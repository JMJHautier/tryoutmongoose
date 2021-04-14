import express from 'express';
import morgan from 'morgan';
import 'dotenv/config.js';
import './db/mongoose.js'; 
import postsRouter from './routes/posts.js';
const app = express();
const port = process.env.PORT || 3001;

app.use(morgan('dev'))
app.use(express.json());

app.use('/posts', postsRouter)
app.get("/", (req, res) => {
   res.send("<h2>Here is my API. GIve it a try</h2>")
})


app.listen(port, ()=> console.log(`Server running on port: ${port}`))
 