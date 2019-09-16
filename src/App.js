import React, { Component } from 'react';
import StudentList from './components/Studentlist';
import StudentDetails from './components/StudentDetails';
import { tsImportEqualsDeclaration } from '@babel/types';
import FormDemo from './components/FormDemo';
import ApiDemo from './components/ApiDemo';


// const App = () => {
//     return (
//         <div>
//             <h1>Welcome to React</h1>
//         </div>
//     );
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {id: 101, name: 'First', cgpa: 3.8},
                {id: 102, name: 'Second', cgpa: 2.6},
                {id: 103, name: 'Third', cgpa: 3.0},
                {id: 104, name: 'Fourth', cgpa: 3.3},
                {id: 105, name: 'Fifth', cgpa: 3.7}
            ]
        };

        this.selectedStudent = null;
    }

    componentDidUpdate(){
        console.log("after update");

    }
    deleteStudent = id => {
        this.setState({
            students: this.state.students.filter(s => s.id !== id)
        });
    }

    selectStudent = id => {
        this.selectedStudent = this.state.students.filter(
            s => s.id === id
        )[0];
        this.forceUpdate();
    }

    render() {
        return (
            <div class="container">
                {/* <Clock/> */}
                <FormDemo/>
                <h3>Student List</h3>
                <StudentList studentlist={this.state.students} 
                    deleteStudent={this.deleteStudent}
                    onSelectStudent={this.selectStudent} />
                <StudentDetails student={this.selectedStudent} />
                <ApiDemo/>
            </div>
        );
    }
}

export default App;