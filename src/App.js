import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Course from './components/course';
import Time from './components/time';
import Section from './components/section';

const Placeholder = () => {
    return <input placeholder='Input here' />
}

class App extends Component {
    state = {
        id: 0,
        data: [

        ],
        content: [

        ]
    }

    handleAdd = () => {
        this.setState({ content: [...this.state.content, <Course id={this.state.id++}/>] })
    }

    render() {
        return <>
            <nav className="navbar navbar-dark bg-dark">
                <div className='container-fluid'>
                    <span className="navbar-brand h1">Course Scheduler</span>
                </div>
            </nav>
            <div className="card border-dark mt-4" style={{ width: "65em", margin: "auto" }}>
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className='card-text'>Courses</h2>
                        <button className='btn btn-primary btn-lg align-middle' onClick={this.handleAdd}>Add Course</button>
                    </div>
                </div>
                {this.state.content}
            </div>
            {/* <button onClick={this.addElement}>Add</button>
            {this.state.components} */}
            <input type={"number"} min={0} max={24}></input>
        </>;
    }
}

export default App;