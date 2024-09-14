import React, {Component} from 'react';
import "./App.css"
import './lottoball.css'

class Ball extends Component{
    render(){
        return (
            <div className='Ball'>{this.props.num}</div>
        )
    }
}


export default Ball;
//This is the child component