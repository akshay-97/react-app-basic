import React from 'react';
   
class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.test="asd"
        this.state={
            event:false
        }
    }
    onEvent =() =>{
        const {deleteItem}=this.props;
        const {id} =this.props.item;
        deleteItem(id);
    }
    onComp = e =>{
        this.setState({event:true})
    }
    render(){
        return(
            <div className="row">
            <div className="col-lg-8">
                {this.state.event?<del>{this.props.item.title}</del>:this.props.item.title}
            </div>
            <div className="col-lg-2">
                {this.state.event?<button className="btn btn-success" onClick={this.onComp}>completed</button>:<button className="btn btn-primary" onClick={this.onComp}>completed</button>}
            </div>
            <div className="col-lg-2">
                <button className="btn btn-danger" onClick={this.onEvent}>delete</button>
            </div>
        </div>
        );
    }
}


export default ListItem;
