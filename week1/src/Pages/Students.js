import React from 'react'
import StudentList from '../Components/StudentList'
import Tile from '../Components/Tile'
import UseFirestore from '../FireBase/UseFireStore';


function Students() {
  let students = [] 
  const {retrieveStudents} = UseFirestore()
  // const [students, setStudents] = useState()

  const retrieveStudentData = async () =>{
    try {
      const snapshot = await retrieveStudents()
      if(snapshot.size){

        snapshot.forEach(record => {
          students.push({...record.data()})
          // console.log(students)
        });
      }
    } catch (e) {
      console.log(e)
    }
  }
  retrieveStudentData()
  return (
      
    <div>
        <Tile>
        <StudentList students = {students}></StudentList>
        </Tile>
    </div>
  )
}

export default Students