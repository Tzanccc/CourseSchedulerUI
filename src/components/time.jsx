import React, { Component } from 'react';

class Time extends Component {
    constructor(props) {
        super(props);
    }

    state = {

    }

    render() {
        return <>
        {/* TODO: Issue with check selection, every object needs unique name attribute */}
            <div className="card border-secondary" style={{ width: "95%", margin: "auto" }}>
                <div className='card-body'>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' type='radio' name='test'></input> 
                        <label>Mon</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' type='radio' name='test'></input>
                        <label>Tues</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' type='radio' name='test'></input>
                        <label>Wed</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' type='radio' name='test'></input>
                        <label>Thurs</label>
                    </div>
                    <div className='form-check form-check-inline'>
                        <input className='form-check-input' type='radio' name='test'></input>
                        <label>Fri</label>
                    </div>
                    <div className="d-inline-flex bd-highlight">
                        <div className='p-1'>From</div>
                        <div className='p-1'>
                            <input type={"number"} min={0} max={24}></input>
                        </div>
                        <div className='p-1'>:</div>
                        <div className='p-1'>
                            <input type={"number"} min={0} max={24}></input>
                        </div>
                        <div className='p-1'>To</div>
                        <div className='p-1'>
                            <input type={"number"} min={0} max={24}></input>
                        </div>
                        <div className='p-1'>:</div>
                        <div className='p-1'>
                            <input type={"number"} min={0} max={24}></input>
                        </div>
                        <div className='p-1 flex-grow-1'></div>
                    </div>
                </div>
            </div>
            <div className='mb-2' />

        </>;
    }
}

export default Time;