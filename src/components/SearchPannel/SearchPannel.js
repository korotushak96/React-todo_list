import React, {Component} from 'react';
import './searchPannel.css';

export default class SearchPannel extends Component{
    state={
        search: ''
    }
    
    searchTask=(event)=>{
        let search = event.target.value;
        this.setState({search})
        this.props.search(search)
    }

    render(){
        return (<input type='text'
            className = 'form-control search-input'
            placeholder='search'
            onChange={this.searchTask}>
            </input>
        )
    }
    
};

 