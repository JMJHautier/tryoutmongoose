import mongoose from 'mongoose'; 

const {Schema, model} = mongoose; 

const postSchema = new Schema ({
   title: {type:String, required: true}, 
   author: {type:String, required: true},
   body:{type:String, required: true},
   date: {type: Date, default: Date.now}
})

export default model('Posts', postSchema, 'Posts')