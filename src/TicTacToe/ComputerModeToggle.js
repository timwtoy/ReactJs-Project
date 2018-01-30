import React from 'react';


class ComputerModeToggle extends React.Component {
    constructor(){
        super();

        this.state={
            computerState: false
        };
    }

    handleClick(click){
        var computerState;
        if(this.state.computerState === null){
            return;
        }
        computerState = !this.state.computerState;
        this.setState({
            computerState: computerState
        }, function(){        
            this.props.changeState(computerState)
        });
    }

    render(){


        return(
            <button className="btn" onClick={() => this.handleClick(this)}>Toggle Computer Mode</button>
        );
    }

}

export default ComputerModeToggle;