import React from 'react';
import logo from '../inc/images/logo.png';
import mp4 from '../inc/images/934158dc-d12e-433c-9fce-a8e68cc8e91b51541279.mp4';
import { UserOutlined,SisternodeOutlined,LockOutlined } from '@ant-design/icons';
import { Input,Switch,Button } from 'antd';

export default class Login extends React.Component{
    render(){
        return(
            <div className="login-main-box-class">
                <video className="mp4-box-class" autoPlay="autoplay" loop={true} muted={true} src={mp4}></video>
                <div className="login-core-box-class flex justify-center align-center flex-direction">
                    <div className="login-form-box-class">
                        <div className="flex justify-center align-center flex-direction">
                            <img style={{width:'200px',height:'auto'}} src={logo} />
                            {/* <h1 style={{paddingBottom:'0px',paddingLeft:'10px',color:'white'}}>技术博客管理后台</h1> */}
                            <div className="login-form-item-class flex justify-start align-center">
                                <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
                            </div>
                            <div className="login-form-item-class flex justify-start align-center">
                                <Input.Password  size="large" prefix={<LockOutlined />} placeholder="input password" />
                            </div>
                            <div className="login-form-item-class flex justify-end align-center">
                                <Switch defaultChecked style={{marginRight:'10px'}} />
                                <Button size="large" type="primary" shape="round" icon={<SisternodeOutlined />}>立即登录</Button>
                            </div>
                            <div className="login-form-item-class flex justify-center align-center">
                                Copyright &copy; &nbsp;<a href="http://www.dsnbc.com" target="_blank">Dias Software Inc.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        
    }
}