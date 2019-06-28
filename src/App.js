import React from 'react';
import TodoForm from './TodoForm';
import Lists from './lists';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            items:[]
        };
    }

    addTodo = (item) =>{
        let bool =false;
        for(let i=0;i<this.state.items.length;i++){
            if(item===this.state.items[i].title){
                bool=true;
                break;
            }
        }
        console.log(bool);
        if(!bool){ 
        const id=this.state.items.length +1;
        const record ={
            id,
            title:item
        };
        this.setState({
            items :[...this.state.items,record]  //creating copy of the items array using spread property and appending new object.
        });
        }
        else{
            alert('already exits');
        }
    };

    deleteTodo = (id) =>{
        
        let temp=this.state.items.filter((item)=>{
            return item.id!==id;
        })
        this.setState({
           items: temp
        });
    }
    render(){
        return(
            <div className="container">
            <h2 className="text-center"> To Do List</h2>
            <TodoForm addTodo={this.addTodo}/>
            <Lists items={this.state.items} deleteItem={this.deleteTodo}/>
            </div>
        );
    }
}

export default App;
