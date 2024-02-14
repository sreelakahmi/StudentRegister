import React,{useEffect,useState} from 'react'
import { Table } from 'react-bootstrap'


function StudentDetails() {
  const [allStudents,setAllStudents]=useState()
    const getAllStudents=async()=>{
      const result =await getAllStudentsAPI()
      setAllStudents(result.data)
    }
    useEffect(()=>{
        getAllStudents()
    },[])
    console.log(allStudents)

  return (
    <>
     <Table striped>
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>DOB</th>
          <th>Gender</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
      <tr>
                <td>{index+1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.gender}</td>
                <td>{student.mobile}</td>
                <td>{student.password}</td>
                <td>{student.dateofBirth}</td>
                <td>{student.course}</td>
              </tr>
     </tbody>

    </Table>
    </>
  )
}

export default StudentDetails