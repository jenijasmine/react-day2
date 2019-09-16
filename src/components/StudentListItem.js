import React, { Component } from 'react'

const StudentListItem = props => {
    const id = props.studentItem.id;
    return (
        <tr key={id} onClick={() => props.onSelectStudent(id)}>
            <td>{id}</td>
            <td>{props.studentItem.name}</td>
            <td>
                <button onClick={() => props.onDeleteStudent(id)}>X</button>
            </td>
        </tr>
    );
}

export default StudentListItem;