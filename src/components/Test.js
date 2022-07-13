import React from 'react';
import {ashakExtends,throttleExtends} from '../inc/commons/common';
import { Button } from 'antd';
import {Link} from 'react-router-dom';

export default class TestComponent extends React.Component{
    shakHandle = ()=>{
        console.log('防抖');
    }
    
    throttleHandle = ()=>{
        console.log('节流');
    }
    render(){
        console.log('render')
        return (<>
            <Button onClick={ashakExtends(this.shakHandle,1000)} type="primary">防抖</Button>
            <Button onClick={throttleExtends(this.throttleHandle,1000)} type="primary">节流</Button>
        </>);
    }
    constructor(){
        super();
        console.log('构造函数')
    }
    componentDidMount(){
        console.log('mounted')
    }
    componentDidUpdate(){
        console.log('更新')
    }
    componentWillUnmount(){
        console.log('卸载')
    }
    componentDidCatch(error){
        console.log(error,'有错误')
    }
}

window.onerror = function(e){
    console.log(e,'错误1')
}

window.addEventListener('error',function(e){
    console.log(e,'错误2')
})