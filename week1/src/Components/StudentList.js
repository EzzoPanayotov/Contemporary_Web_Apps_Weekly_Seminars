import React from 'react'
import '../CSS/List.css'

function StudentList(props) {
  return (
    <div>    
        <table className = 'databaseMockUp'>
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Date</th>
                </tr>
            </thead>
            
            {props.students.map((record, key) => {
                console.log(record)
            
            return(
                <tbody key={key}>
                <tr>
                    <td>{record.Email}</td>
                    <td>{record.Password}</td>
                    <td>{record.Date}</td>
                    {/* <td>{record.Password}</td>
                    <td>{record.Date}</td> */}
                </tr>
            </tbody>
            )   
            
        })}
        </table>
    </div>
  )
}

export default StudentList