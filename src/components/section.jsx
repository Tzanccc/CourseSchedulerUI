import React, { Component } from 'react';
import Time from './time';

class Section extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        content: [

        ]
    }

    handleAdd = () => {
        this.setState({content: [...this.state.content, <Time />]})
    }

    render() {
        return <>
            <div className="card border-dark" style={{ width: "95%", margin: "auto" }}>
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                        <div className='p-1'>
                            <label>Section Name</label>
                        </div>
                        <div className='p-1 flex-fill'>
                            <input className='form-control' placeholder='Section Name...' />
                        </div>
                        <div className='p-1'>
                            <button className='btn btn-primary' onClick={this.handleAdd}>Add Time</button>
                        </div>
                        <div className='p-1'>
                            <button className='btn btn-primary'>Add Section Dependency</button>
                        </div>
                        <div className='p-1'>
                            <button className='btn btn-danger'>Delete Section</button>
                        </div>
                    </div>
                </div>
                {this.state.content}
            </div>
            <div className='mb-2' />
        </>;
    }
}

export default Section;