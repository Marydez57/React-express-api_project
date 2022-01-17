import {useState} from 'react'

const Input = () => {
    const [author, setAuthor] = useState("")
    const [comment, setComment] = useState("")
    const onSubmit = async e =>{
            e.preventDefault();
            try{
                const body = {author, comment}
                const res = await fetch ('http://localhost:5000/users', {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                })
                window.location = "/";

            }catch(err){
                console.error(err.message)
            }
    }
    return (
        <div>
          <h1>Input Users</h1> 
          <form className='mt-5' onSubmit ={onSubmit}>
              <input type="text" className='author-input' value = {author} onChange ={e =>setAuthor(e.target.value)} />
              <input type="text" className='form-input' value = {comment} onChange ={e => setComment(e.target.value)} placeholder='Write your comments here'/>
              <button className='btn-success'>Add User</button>
          </form>
        </div>
    )
}

export default Input
