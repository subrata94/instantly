import React, { Component } from "react";
import { render } from "react-dom";

class App extends Component{

    render(){
        return (
            <div className="abc">Hello there 1!</div>
        ); 
    }
};

render(<App />, window.document.getElementById('app1'));