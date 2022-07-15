import '../App.css';
import React from 'react';
import Menus from '../components/Menus';
import Contents from '../components/Contents';
import store from '../store';
import { Provider } from 'react-redux';
export default class Layout extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <div className="App flex justify-between align-center">
                    <Menus/>
                    <div className="line-y"></div>
                    <Contents/>
                </div>
            </Provider>
        )
    }
}