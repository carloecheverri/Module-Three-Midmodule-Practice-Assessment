import React from "react";
import Classroom from "./components/Classroom";
import Enrolled from "./components/Enrolled"
import studentData from "./data/studentData";



class App extends React.Component {
  state = {students: [], count:0}

    addToClass = (student) => {
      this.setState((prevState) => ({students: [...prevState.students, student]}))
    }

    increment = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };

  render() {
    const { students, count} = this.state
    return (
      <div className="App">
        <Classroom addStudent={this.addToClass}/>
        <Enrolled students={students}/>
      </div>
    );
  }
}

export default App;
