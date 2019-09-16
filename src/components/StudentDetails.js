import React from 'react'

const StudentDetails = props => {
    if (props.student) {
        return (
            <div>
                Name: {props.student.name} <br />
                CGPA: {props.student.cgpa}
            </div>
        )
    }
    return (
        <div>
            No student selected yet...
        </div>
    )
}

export default StudentDetails;