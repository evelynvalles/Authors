import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link ,useNavigate, useParams } from 'react-router-dom'

const UpdatePage = () => {
  const [name, setName] = useState("")
  const navigate = useNavigate();
  const {id} = useParams();
  const [errors, setErrors] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:8000/api/author/${id}`)
      .then(response=>{
        const dest = response.data
        setName(dest.name)
      })
      .catch(err=>console.log(err))
  },[id])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/author/update/${id}`, {name})
        .then(res=> {
          navigate(`/`)
        })
        .catch(err=> {
          const errorResponseDataErrors = err.response.data.errors
          console.log(errorResponseDataErrors)
          const errMsgArr =[]
          for(const eachKey in errorResponseDataErrors){
              errMsgArr.push(errorResponseDataErrors[eachKey].message)
          }
          setErrors(errMsgArr)
        })
}

  return (
    <div>
      <h1>Favorite Authors</h1>
      <Link to="/">Home</Link>
      <p>Edit this author</p>
      <div className='formBox'>
        <form onSubmit={handleSubmit}>
          <div className='label'>
            <label>Name: </label>
          </div>
          <div className='inputBox'>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
          </div>
          {
            errors.map((eachErr, i)=>(
                <p key={i} style={{color: "red"}}> {eachErr}</p>
            ))
            }
          <div className='btns'>
            <Link to="/" className='btn'>Cancel</Link>
            <button className='btn'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdatePage