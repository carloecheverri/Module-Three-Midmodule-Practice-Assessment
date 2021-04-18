import React from "react";
import Student from "./Student"
import studentData from "../data/studentData";

class Classroom extends React.Component {
    
    render(){
        const ListStudents = studentData.map(student => {
            return <Student
                name={student.name}
                age={student.age}
                image={student.image}
                bio={student.bio}
                GPA={student.GPA}
                id={student.id}
                addStudent={this.props.addStudent}
                
    
                />
    })
        return (
            <div className="classroom">
                <h1>Build a Class</h1>
                {ListStudents}

            </div>
        )
    }

}


export default Classroom