import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const DashboardTable = (props) => {
  
  const handleDelete = (deleteId)=>{
    axios.delete(`http://localhost:8000/api/author/delete/${deleteId}`)
        .then(response=>{
            props.onDelete(deleteId)
        })
        .catch(err=>console.log(err))
}

  return (
    <div className='tableBox'>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: 800}} align="center">Authors</TableCell>
              <TableCell sx={{fontWeight: 800}} align="center">Actions Available</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {
                props.authors.map((eachAuthor, i) => {
                  return(
                    <TableRow key={i}>
                      <TableCell align="center">{eachAuthor.name}</TableCell>
                      <TableCell align="center"><Link to={`/edit/${eachAuthor._id}`} className="btnTable">Edit</Link> <button onClick={()=>handleDelete(eachAuthor._id)} className="btnTable">Delete</button></TableCell>
                    </TableRow>
                  )
                })
              }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DashboardTable