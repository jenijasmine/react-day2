import React, { Component } from 'react'
import StudentListItem from './StudentListItem';

export default class
    StudentList extends Component {
    constructor(props) {
        super(props);
    }

    // handleDeleteStudent = id => {
    //     this.props.deleteStudent(id);
    // }

    render() {
        let studentItems =
            this.props.studentlist.map(s =>
                <StudentListItem studentItem={s} 
                    key={s.id} 
                    onDeleteStudent={this.props.deleteStudent} 
                    onSelectStudent={this.props.onSelectStudent} />
            );
        return (
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {studentItems}
                </tbody>
            </table>
        );
    }
}