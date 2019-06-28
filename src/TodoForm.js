import React from 'react';

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            input: ""
        };
    }


    handleChange = (event) =>{
        this.setState({
            input:event.target.value
        });

    };

    submitTodo = () => {
    const { addTodo } = this.props
    const { input } = this.state

      addTodo(input)
      this.setState({
        input: ''
      })
    }

    render(){
        return(
            <div className="form-group">
                <input type="text" value={this.state.input} className="form-control" onChange={this.handleChange}/>
                <button
                  className="btn btn-primary btn-block"
                  onClick={this.submitTodo}>
                    Add todo
                </button>
            </div>
        );
    };
};

export default TodoForm;
