import axios, { eventsApiURL } from '../../../axios';
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './User.scss'
import { useState } from 'react';
import bootdis from '../../../assets/drawable/bootdis.png'
import booten from '../../../assets/drawable/booten.png'
import eyedis from '../../../assets/drawable/eyedis.png'
import eyeen from '../../../assets/drawable/eyeen.png'
import glovedis from '../../../assets/drawable/glovedis.png'
import gloveen from '../../../assets/drawable/gloveen.png'
import hatdis from '../../../assets/drawable/hatdis.png'
import haten from '../../../assets/drawable/haten.png'
import maskdis from '../../../assets/drawable/maskdis.png'
import masken from '../../../assets/drawable/masken.png'
import vestdis from '../../../assets/drawable/vestdis.png'
import vesten from '../../../assets/drawable/vesten.png'
import { redirect } from 'react-router-dom';
const User = () => {
    const { register, handleSubmit } = useForm();
    const [fileName, setFileName] = useState('Click to Upload a File')
    const [resultData, setResultData] = useState([])
    const [dataVisible, setDataVisible] = useState(false)
    const onSubmit = (data) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(data.image[0]);
            fileReader.onload = () => {
                resolve(fileReader.result);
                const image64 = fileReader.result.replace('data:image/jpeg;base64,', '').replace('data:image/png;base64,', '').replace('data:image/jpg;base64,', '')
                console.log("🚀 ~ file: User.jsx:15 ~ returnnewPromise ~ image64", image64)
                axios.post(eventsApiURL, {
                    health: "",
                    rule: "",
                    person: "",
                    deviceid: "safetybrain-website",
                    lng: 0.0,
                    lat: 0.0,
                    image: image64,
                }).then((res) => {
                    console.log(res.data);
                    setResultData(res.data)
                    setDataVisible(true)
                }).catch((err) => {
                    console.log(err);
                })
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const logOutHandler = () => {
        sessionStorage.clear()
        window.location.reload()
        return redirect("/login")
    }
    return (
        <div className='User'>
            <div className="pages">
                <Container>
                    <div className="upload">
                        <form className='fileUpload' onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="inputTag" onChange={(e) => setFileName(e.target.files[0].name)} >
                                {fileName}
                                <input id='inputTag' type="file" {...register("image")} />
                            </label>
                            <button className='btn' type="submit">Send Image</button>
                        </form>
                    </div>
                    {dataVisible ?
                        <div className="result">
                            <Card className='resultCard'>
                                <Row className='d-flex justify-content-around align-items-center'>
                                    <Col md={3} className="text-center">
                                        <img src={resultData.SafetyResult ? `http://109.205.28.225:8443${resultData.SafetyResult[0].Photo}` : ""} alt="" className="img-fluid resultImg" />
                                    </Col>
                                    <Col md={4}>
                                        <h5>ID: {resultData.id ? resultData.id : "NA"}</h5>
                                        <h5>Device Name: {resultData.Device ? resultData.Device.Name : "NA"}</h5>
                                        <h5>Latitude: {resultData.Device.Lattitude ? resultData.Device.Lattitude : 0}</h5>
                                        <h5>Longitude: {resultData.Device.Longitude ? resultData.Device.Longitude : 0}</h5>
                                    </Col>
                                    <Col md={5}>
                                        <Row className='rowCustom'>
                                            <Col xs={4}>
                                                <img src={resultData.SafetyResult ? resultData.SafetyResult[0].Boot ? booten : bootdis : ""} alt="" className="img-fluid safImg" />
                                            </Col>
                                            <Col xs={4}>
                                                <img src={resultData.SafetyResult ? resultData.SafetyResult[0].Glasses ? eyeen : eyedis : ""} alt="" className="img-fluid safImg" />
                                            </Col>
                                            <Col xs={4}>
                                                <img src={resultData.SafetyResult ? resultData.SafetyResult[0].Gloves ? gloveen : glovedis : ""} alt="" className="img-fluid safImg" />
                                            </Col>
                                            <Col xs={4}>
                                                <img src={resultData.SafetyResult ? resultData.SafetyResult[0].Hat ? haten : hatdis : ""} alt="" className="img-fluid safImg" />
                                            </Col>
                                            <Col xs={4}>
                                                <img src={resultData.SafetyResult ? resultData.SafetyResult[0].Mask ? masken : maskdis : ""} alt="" className="img-fluid safImg" />
                                            </Col>
                                            <Col xs={4}>
                                                <img src={resultData.SafetyResult ? resultData.SafetyResult[0].Vest ? vesten : vestdis : ""} alt="" className="img-fluid safImg" />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <div>
                                </div>
                            </Card>
                        </div>
                        : ""}
                    <button className='btn logOutBtn' onClick={logOutHandler}>Log Out</button>
                </Container>
            </div >
        </div >
    )
}

export default User
