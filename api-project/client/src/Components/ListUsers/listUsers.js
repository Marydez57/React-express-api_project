import {useEffect, useState} from 'react'

const ListUsers = () => {
    const getUsers = async() => {
        try {
            const res = await fetch("http://localhost:5000/users")
            const data = await res.json()
            console.log(data);
            
        } catch (err) {
            console.error(err.message)
    }
}

    useEffect(() =>{
        getUsers();
    })  
    return (
        <div>
         <h1> List users</h1>
         <table className="table mt-5 text-center">
    <thead>
      <tr>
      <th>Author</th>
        <th>Comment</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>

    </tbody>
  </table>
           
        </div>
    )
}

export default ListUsers
