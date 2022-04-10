import React, { Component } from 'react';

class Addition extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    
    handleChange(event) {
        
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        console.log('cleared')
        let title = this.title 
        console.log({title});
        event.preventDefault();
        this.setState({value: ""})
        
    }
    
    render() {
        var num1=Math.floor( Math.random() *10) +1  , num2=Math.floor( Math.random() *10) +1

        let score = 10;
        
        if (score === 10)   return "winner"
        
        return (
            <>
            <form onSubmit={this.handleSubmit}>
            {num1} + {num2} <br></br>
            <label>
            <input type="number" value={this.state.value} ref={(c) => this.title = c }  onChange={this.handleChange } />
            {score ++}
            <br></br>Score: {score}
            
            </label>
            </form>
        </>
        )
      }
}

export default Addition;