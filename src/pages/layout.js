import '../App.css';
import React from 'react';
import {Outlet} from 'react-router-dom';
import Menus from '../components/Menus';
import Header from '../components/Heaser';
import Footer from '../components/Footer';
export default class Layout extends React.Component{
    render(){
        return(
            <div className="App flex justify-between align-center">
                <Menus/>
                <div className="line-y"></div>
                <div className='content-main-box-class flex-1-1'>
                    <Header />
                    <div className='line-x'></div>
                    <div className='content-core-main-class'>
                        <Outlet />
                    </div>
                    <div className='line-x'></div>
                    <Footer />
                </div>
            </div>
        )
    }
}