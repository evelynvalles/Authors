import React, { useState } from 'react'
import axios from "axios"
import { useNavigate , Link } from "react-router-dom"

const CreateForm = (props) => {
    const [name, setName] = useState("")
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author", {name})
            .then(res=> {
                console.log(res)
                setName(res.data);
                clearForm();
                navigate("/");
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

    const clearForm = () => {
        setName("")
        }

    return (
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
    )
}

export default CreateForm