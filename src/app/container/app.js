import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";

class App extends Component{

    render(){
        return (
            <div className="abc">Hello there!</div>
        ); 
    }
};

class App2 extends Component{

    render(){
        return (
            <div className="abc">Hello there1111111!</div>
        ); 
    }
};


const mapStateToProps = state => {
	return {
		contact : state.contacts.users
	}
};


render(<App />, window.document.getElementById('app'));
render(<App2 />, window.document.getElementById('app2'));