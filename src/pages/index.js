import React from 'react';
export default class Index extends React.Component{
    render(){
        return(
            <div>Home</div>
        )
    }

    shouldComponentUpdate() {
        return false;
    }
}