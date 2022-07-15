import React from 'react';
import { connect } from 'react-redux';

class Menus extends React.Component{
    render(){
        return(
            <div className={this.props.status?'menus-box-class hm flex-0-0':'menus-box-class flex-0-0'}>{this.props.status?'aaaaaa':'bbbbbbbbbbb'}</div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state,'BBBBBBBB')
    return state;
}

export default connect(mapStateToProps)(Menus);