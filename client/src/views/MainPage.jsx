import React, { useEffect, useState } from 'react'
import DashboardTable from '../components/DashboardTable'
import { Link } from "react-router-dom"
import axios from 'axios';

const MainPage = () => {
  const [authors, setAuthors] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/api/author")
      .then(response => {
        setAuthors(response.data)
      })
      .catch(err => console.log(err))
  }, [])

  const filterList = (deleteId) =>{
    const updatedList = authors.filter(
        (eachAuthor)=>deleteId!== eachAuthor._id)
    setAuthors(updatedList)
    }

  return (
    <div>
      <h1>Favorite Authors</h1>
      <Link to="/new">Add an author</Link>
      <p>We have quotes by: </p>
      {
        authors ?
        <DashboardTable authors={authors} onDelete={filterList}/>:
        <h1>No authors available</h1>
      }
    </div>
  )
}

export default MainPage