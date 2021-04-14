import Posts from '../models/post.js';

export const getAllPosts = async (req, res) => 
{
   try {
      const posts = await Posts.find(); 
      res.json(posts);
   } catch(error) {res.status(500).json({error:error.message})}

   };

   
