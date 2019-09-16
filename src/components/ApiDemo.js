import React, { Component } from 'react';
import axios from 'axios';

export default class ApiDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    getPosts = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
              .then(response => {
                  console.log(response);
                  const data = JSON.parse(JSON.stringify(response.data));
                  this.setState({
                      posts: data.slice()
                  });
              })
    }

    render() {
        let postlist = this.state.posts.map(
            p => (
            <p>
                ID: {p.id} <br/>
                Title: {p.title} <br/>
                Body: {p.body} <br/>
                <hr/>
            </p>
            )
        );
        return(
            <div>
                <button className="btn btn-success" onClick={this.getPosts}>Get Posts</button>
                {postlist}
            </div>
        )
    }
}