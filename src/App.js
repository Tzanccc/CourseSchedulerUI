import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

const Placeholder = () => {
    return <input placeholder='Input here' />
}

class App extends Component {
    state = {
        data: [

        ],
        components: [

        ]
    }

    addElement = () => {
        this.setState({ components: [...this.state.components, <Placeholder />] })
    }

    render() {
        return <>
            <nav className="navbar navbar-dark bg-dark">
                <div className='container-fluid'>
                    <span className="navbar-brand mb-0 h1">Course Scheduler</span>
                </div>
            </nav>
            <div style={{ margin: "20px" }} />
            <div class="card border-dark mb-3" style={{ width: "65rem", margin: "auto" }}>
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center">
                        <h2 className='card-text'>Courses</h2>
                        <button className='btn btn-primary btn-lg align-middle'>Add Course</button>
                    </div>
                </div>
            </div>
            {/* <button onClick={this.addElement}>Add</button>
            {this.state.components} */}
        </>;
    }
}

export default App;