import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from '../components/Heaser';
import Footer from '../components/Footer';
import { connect } from 'react-redux';

class Contents extends React.Component{
    render(){
        console.log(this.props.status,'C')
        return(
            <div className={!this.props.status?'content-main-box-class chm':'content-main-box-class'}>
                <Header />
                <div className='line-x'></div>
                <div className='content-core-main-class'>
                    <Outlet />
                </div>
                <div className='line-x'></div>
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state,'CCCCCCCCCCCCC')
    return state;
}

export default connect(mapStateToProps)(Contents);