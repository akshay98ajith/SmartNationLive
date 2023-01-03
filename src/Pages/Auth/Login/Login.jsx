import axios, { loginApiURL } from '../../../axios';
import React from 'react'
import { Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Login.scss'

const Login = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        axios.post(loginApiURL, {
            username: data.username,
            password: data.password,
            deviceid: data.deviceid
        }).then((res) => {
            // sessionStorage.setItem("token", "963f10795849d89f44197eeb1caaece93fc8253b")
            sessionStorage.setItem("token", res.data.token)
            window.location.reload()
        }).catch((err) => {
            // sessionStorage.setItem("token", "963f10795849d89f44197eeb1caaece93fc8253b")
            window.location.reload()
            console.log(err);
        })
    };
    return (
        <div className="pages">
            <div className='Login'>
                <Card>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='mb-3'>
                            <label className="form-label">
                                Username
                            </label>
                            <input className="form-control" name='username' value="website" type="text" placeholder="Username" {...register("username", { required: true })} />
                        </div>
                        <div className='mb-3'>
                            <label className="form-label">
                                Password
                            </label>
                            <input className="form-control" name='password' value="2222wwww" type="password" placeholder="Password" {...register("password", { required: true })} />
                        </div>
                        <div className='mb-3'>
                            <label className="form-label">
                                Device ID
                            </label>
                            <input className="form-control" type="text" value="safetybrain-website" name='deviceid' placeholder="Device ID" {...register("deviceid", { required: true })} />
                        </div>
                        <button className='btn button px-5 py-3 rounded-0 m-au  to m-md-0 text-nowrap mb-5 mb-sm-0' type="submit">
                            Login
                        </button>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default Login
