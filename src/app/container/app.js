import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { connect } from "react-redux";

import {Navigation} from "../components/dumbComponents/navigation";

class App extends Component{
    render(){
        return (
            <div className="abc">
                <BrowserRouter>
                    <Navigation />
                </BrowserRouter>
            </div>
        ); 
    }
};

const mapStateToProps = state => {
	return {
		contact : state.contacts.users
	}
};


render(<App />, window.document.getElementById('app'));