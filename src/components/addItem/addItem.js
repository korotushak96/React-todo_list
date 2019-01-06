import React, {Component} from 'react';
import './addItem.css';

export default class AddButton extends Component {
    
    state={
        text: ''
    }

    changeInput=(e)=>{
        this.setState({
            text: e.target.value
        })
    }

    sendItem = (e) =>{
        e.preventDefault();
        this.props.addNew(this.state.text);
        this.setState({
            text:''
        })
    }
    render(){
        return(
            <div>
                <form
                    className="item-add-form d-flex"
                    onSubmit={this.sendItem}>
                        <input
                            type='text'
                            className='form-control'
                            onChange={this.changeInput}
                            value = {this.state.text}
                            placeholder="what to do next?"
                        ></input>
                        <button 
                            type='submit'
                            className='btn btn-outline-secondary'>
                                Add
                        </button>
                </form> 
            </div>
        )
    }
    
}

 