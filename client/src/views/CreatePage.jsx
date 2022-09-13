import React from 'react'
import CreateForm from '../components/CreateForm'
import { Link } from "react-router-dom"

const CreatePage = () => {
  return (
    <div>
      <h1>Favorite Authors</h1>
      <Link to="/">Home</Link>
      <p>Add a new author:</p>
      <CreateForm />
    </div>
  )
}

export default CreatePage