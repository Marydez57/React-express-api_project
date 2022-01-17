import express  from "express";
import cors from "cors"
const app = express()
import pool from './db/connection.js'

//middleware
app.use(cors())
app.use(express.json())
//Routes

//post a user
app.post('/users', async(req, res, next)=>{
    try{
        const {author, comment} = req.body;
        const createUser = await pool.query('INSERT INTO users (author, comment) VALUES($1, $2) returning *', [author, comment]);
        res.json(createUser.rows[0])


    }catch(err){
        console.error(err.message)
    }
    
})
//get all users
app.get("/users",  async(req, res, next)=>{
    
  try {
    const allUsers = await pool.query('SELECT * FROM users');
    res.json(allUsers.rows)
  }catch (err){
    console.error(err.message)
  }
  })

  //get a user
  app.get('/users/:id', async(req, res)=>{
    try{
      const {id} = req.params;
      const user = await pool.query('SELECT * FROM users WHERE users_id = $1', [id])
      res.json(user.rows[0])
    }catch(err){
      console.error(err.message)
    }
  })

  //update a user

  app.put('/users/:id', async(req, res, next)=>{
    try{
      const {id} = req.params;
      const {comment} = req.body
      const updateUser = await pool.query('UPDATE users SET comment = $1 WHERE users_id = $2', [comment, id])
      res.json({message: "user was updated.",
      payload: updateUser.rows
    
    })

    }catch (err){
      console.error(err.message)
    }
  })

  //delete a user
  app.delete('/users/:id',async(req, res, next)=>{
    try{
      const {id} = req.params
      const deleteUser = await pool.query('DELETE FROM users WHERE users_id = $1', [id])
      res.json({
        message: "user was deleted",
        payload: deleteUser
      })

    }catch(err){
      console.error(err.message)
    }
  })
  

app.listen(5000,()=>{
    console.log("server has started on port 5000")
})