import React,{ Context,useState }  from 'react';
import { connect } from 'react-redux';
import {createBrowserHistory} from 'history';

class Header extends React.Component{

    changeMenuStatusHandle = ()=>{
        this.props.sendAction();
    }

    testHandler = ()=>{
        createBrowserHistory().replace('/login')
        window.location.reload();
    }

    render(){
        return(
            <div className='header-box-class flex justify-between align-center'>
                <div><span onClick={(e)=>this.changeMenuStatusHandle()} className='iconfont icon-gengduomokuai'></span></div>
                <div><span onClick={(e)=>this.testHandler()} className="iconfont icon-wodeqiye"></span></div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        sendAction:()=>{
            dispatch({
                type:'send_menu_status',
            });
        }
    }
}

export default connect(null,mapDispatchToProps)(Header);