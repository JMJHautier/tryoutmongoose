import express from 'express'; 
import {
   getAllPosts
} from '../controllers/post.js';

const posts = express.Router();

posts.get('/', getAllPosts)

export default posts