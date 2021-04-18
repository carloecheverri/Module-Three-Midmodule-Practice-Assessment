import React from "react";
import Student from "./Student";
import Classroom from "./Classroom";
import studentData from "../data/studentData";

class Enrolled extends React.Component {
    // state = {avg: 0}

    // average = () => {

    // }

  render() {
    const { students } = this.props;
    let sum = 0;
    students.forEach((student) =>{
         sum += student.GPA
    })

    let avg = Number(sum/students.length)




    return (
      <div className="enrolled">
        <h1>Enrolled</h1>
        <ul>
          {students.map((student) => {
            return (
              <li key={student.id}>
                {student.name}: {student.GPA}
              </li>
            );
          })}
        </ul>
        <h2>Total Student Count: {students.length}</h2>
        <h2>Average GPA: {Number.isNaN(avg) ? 0.00 : avg} </h2>
      </div>
    );
}
}

export default Enrolled;

{/* <h2>Average GPA: {students.map(student =>{
    return (<p>{student.GPA}</p>)
})} </h2> */}