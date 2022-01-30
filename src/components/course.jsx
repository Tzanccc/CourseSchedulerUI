import React, { Component } from 'react';
import Section from './section';

class Course extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        content: [

        ]
    }

    handleAdd = () => {
        this.setState({content: [...this.state.content, <Section />]})
    }

    render() {
        return <>
            <div className="card border-info" style={{ width:"95%", margin:"auto"}}>
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                        <div className='p-1'>
                            <label>Course Name</label>
                        </div>
                        <div className='p-1 flex-fill'>
                            <input className='form-control' placeholder='Course Name...' />
                        </div>
                        <div className='p-1'>
                            <button className='btn btn-primary' onClick={this.handleAdd}>Add Section</button>
                        </div>
                        <div className='p-1'>
                            <button className='btn btn-danger'>Delete Course</button>
                        </div>
                    </div>
                </div>
                {this.state.content}
            </div>
            <div className='mb-4' />
        </>;
    }
}

export default Course;