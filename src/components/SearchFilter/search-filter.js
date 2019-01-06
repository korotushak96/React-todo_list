import React, {Component} from 'react';
import './search-filter.css';



export default class Searchfilter extends Component{
    state={
        filter:'all'
    }

    onAll=(e)=>{
        this.setState({
            filter: 'all'
        })
        this.props.filter('all')
    }

    onDone=(e)=>{
        this.setState({
            filter: 'done'
        })
        this.props.filter('done')
    }

    onActive=(e)=>{
        this.setState({
            filter: 'active'
        })
        this.props.filter('active')
    }
    render(){
        let classNames = 'btn btn-outline-secondary';
        const {filter} = this.state; 
        let activeNames = 'btn btn-info'
        return(
            <div className="btn-group">
                <button className= {filter==='all' ? activeNames : classNames}
                onClick={this.onAll}
                >All</button>
                <button className={filter==='active' ? activeNames : classNames}
                    onClick={this.onActive}
                    >Active</button>
                <button className={filter==='done' ? activeNames : classNames} 
                    onClick={this.onDone}
                    >Done</button>
            </div>
        )
    }
    
}

