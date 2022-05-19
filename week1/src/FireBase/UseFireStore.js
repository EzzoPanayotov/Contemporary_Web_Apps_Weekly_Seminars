import React from 'react'
import {
    doc,
    addDoc,
    collection,
    getDocs,
    getFirestore
} from 'firebase/firestore'


function UseFirestore() {
    const db = getFirestore()
    const ref = collection(db,'student' )
    const saveStudent = (student) => addDoc(ref, student)
    const retrieveStudents = () => getDocs(ref)
    return {saveStudent, retrieveStudents}
}

export default UseFirestore