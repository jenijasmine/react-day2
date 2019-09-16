import React, { Component } from 'react';

class FormDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:''
        };
    }

    handleChange = event => {
      this.setState({
          name: event.target.value
      });
    }
 
    handleSubmit = event => {
        console.log('form submitted');
        console.log(event);
        event.preventDefault();
    }
    render() {
    return (
        <div>
        <form onSubmit= {this.handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            </label>
            <input type="submit" value="submit"/>
        </form>
        <p>
            Name: {this.state.name}
        </p>
        </div>
    );
    }
}

export default FormDemo;