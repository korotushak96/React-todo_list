import React, {Component} from 'react';


import AppHeader from '../AppHeader/AppHeader';
import ToDoList from '../toDoList/toDoList';
import SearchPannel from '../SearchPannel/SearchPannel';
import Searchfilter from '../SearchFilter/search-filter';
import AddButton from '../addItem';

import './app.css';


export default class App extends Component{
    maxId = 1;

    state = {
        data: [
            this.createTodoItem('Learn React'),
            this.createTodoItem('make App'),
            this.createTodoItem('relax')
        ],
        search: '',
        filter: 'all'
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false, 
            id: this.maxId++
        }
    };

    deleteItem = (id) =>{
        this.setState(({data})=>{
            const inx = data.findIndex((el)=> el.id === id);
            const newData = [...data.slice(0,inx), ...data.slice(inx+1)]
            return {
                data: newData
            }
        })
    };

    addItem = (text)=>{
        this.setState(({data})=>{
            let add = this.createTodoItem(text);
            const newData = [...data, add];
            return {
                data: newData
            }
        })
    }

    toggleProperty = (arr, id, propName) => {
        let inx = arr.findIndex(el => el.id === id);
           
        let oldItem = arr[inx];
       let newItem = {
           ...oldItem, 
           [propName]: !oldItem[propName]}

        return [
            ...arr.slice(0, inx),
            newItem,
            ...arr.slice(inx+1)
            ];

    }  

    onToggleDone= (id)=>{
        this.setState(({data})=>{
            return{
                data: this.toggleProperty(data, id, 'done')
            }
        })
    }
    
    onToggleImportant= (id)=>{
        this.setState(({data})=>{
            return{
                data: this.toggleProperty(data, id, 'important')
            }
        })
    }

    searchText = (text) =>{
        this.setState(({search})=>{
            return {
                search: text
            }
        })
    };

    setFilter = (filter) =>{
        this.setState({filter})
    }

    searchTask(data, search, filter){
        let newData ;
        if (!search && filter==='all') return data;
        if (filter==='done') newData = data.filter(el=>el.done);
        if(filter==='active') newData = data.filter(el => !el.done)
        if (search) newData = data.filter(el=>el.label.toLowerCase().indexOf(search.toLowerCase()) > -1)
        return newData
    }

    render(){
        const {data, search, filter}= this.state;
        const visibleItems = this.searchTask(data, search, filter)
        const countDone = data.filter(el => el.done).length;
        const toDoCount = data.length - countDone;

        return(
            
            <div className='todo-app'>
                <AppHeader toDo={toDoCount} done={countDone}
                 />
                <div className='top-panel d-flex'>
                    <SearchPannel search={this.searchText}/>
                    <Searchfilter filter={this.setFilter}/>
                </div>  
                <ToDoList todos = {visibleItems}
                    onDeleted = {this.deleteItem} 
                    onToggleDone= {this.onToggleDone}
                    onToggleImportant= {this.onToggleImportant}/>
                <AddButton addNew={this.addItem}/>
            </div>
        )
    }
}


 