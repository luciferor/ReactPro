import React from 'react';
import logo from '../inc/images/logo.png';
import mp4 from '../inc/images/934158dc-d12e-433c-9fce-a8e68cc8e91b51541279.mp4';
import { UserOutlined } from '@ant-design/icons';
import { Input } from 'antd';

export default class Login extends React.Component{
    render(){
        return(
            <div className="login-main-box-class">
                <video className="mp4-box-class" autoplay="autoplay" loop={true} muted={true} src={mp4}></video>
                <div className="login-core-box-class flex justify-center align-center flex-direction">
                    <div className="login-form-box-class">
                        <div className="flex justify-center align-end">
                            <img style={{width:'200px',height:'auto'}} src={logo} />
                            <h1 style={{paddingBottom:'0px',paddingLeft:'10px',color:'white'}}>技术博客管理后台</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        
    }
}