// App.jsx
/*
This should be a description of the class.
convention recommends only 1 class per file.
the filename should be descriptive.
* Make sure this file is imported from the index.jsx

*/

import React from "react";
import axios from 'axios';

// export: this allows other javascript files to import
// this file import app from app.jsx will pull this class
// i guess thats why there is only one class per file...
export default class App extends React.Component {
    /* Class Description:
    This is a Reactjs component, meant to load the initial
    framework of the index.html or / route. 
    :params: None
    :return: a Reactjs render funtion with the complete body
    of the / route page as quickly as possible.
    */
    
    constructor() {
        // This is the automatically fired init def.
        super(); // super loads the entire calls into a 'this' variable. akin to self.
        console.log('Loading React Component APP.');
        this.getCall();
        
    }
    
    getCall() {
        // Make a web call.
        console.log('Starting API call...');
        // my local ip: 192.168.99.255
        // `${process.env.REACT_APP_USERS_SERVICE_URL}/users`
        //axios.get(`http://192.168.99.255/users`)
        //.then((res) => { console.log(res); })
        //.catch((err) => { console.log(err); } );
        
    }
    
    
    render () {
        // This needs to return all of the proper HTML for the block it will
        // produce.
        var x = 'stuff';
        return (
            <div id='testblock'>
                <p>This is <b>really</b> working.{x}</p>
            </div>
        )
    }
}