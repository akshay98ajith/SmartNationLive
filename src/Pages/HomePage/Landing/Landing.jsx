import React from 'react'
import { Container } from 'react-bootstrap'
import Button from '../../../Components/Button/Button'
import "./Landing.scss"

const Landing = () => {
    return (
        <section className='landingSection'>
            <div className="bgColor">
                <Container className='text-center'>
                    <h1 className=''>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='landAnim'>S</div>
                            <div className='landAnim'>t</div>
                            <div className='landAnim'>a</div>
                            <div className='landAnim'>r</div>
                            <div className='landAnim'>t</div>
                            <div className='landAnim'>-</div>
                            <div className='landAnim'>t</div>
                            <div className='landAnim'>o</div>
                            <div className='landAnim'>-</div>
                            <div className='landAnim'>F</div>
                            <div className='landAnim'>i</div>
                            <div className='landAnim'>n</div>
                            <div className='landAnim'>i</div>
                            <div className='landAnim'>s</div>
                            <div className='landAnim'>h</div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='landAnim'>S</div>
                            <div className='landAnim'>a</div>
                            <div className='landAnim'>f</div>
                            <div className='landAnim'>e</div>
                            <div className='landAnim'>t</div>
                            <div className='landAnim'>y&nbsp;</div>
                            <div className='landAnim'>&&nbsp;</div>
                            <div className='landAnim'>C</div>
                            <div className='landAnim'>o</div>
                            <div className='landAnim'>m</div>
                            <div className='landAnim'>p</div>
                            <div className='landAnim'>l</div>
                            <div className='landAnim'>i</div>
                            <div className='landAnim'>a</div>
                            <div className='landAnim'>n</div>
                            <div className='landAnim'>c</div>
                            <div className='landAnim'>e</div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center'>
                            <div className='landAnim'>M</div>
                            <div className='landAnim'>a</div>
                            <div className='landAnim'>n</div>
                            <div className='landAnim'>a</div>
                            <div className='landAnim'>g</div>
                            <div className='landAnim'>e</div>
                            <div className='landAnim'>m</div>
                            <div className='landAnim'>e</div>
                            <div className='landAnim'>n</div>
                            <div className='landAnim'>t&nbsp;</div>
                            <div className='landAnim'>S</div>
                            <div className='landAnim'>o</div>
                            <div className='landAnim'>f</div>
                            <div className='landAnim'>t</div>
                            <div className='landAnim'>w</div>
                            <div className='landAnim'>a</div>
                            <div className='landAnim'>r</div>
                            <div className='landAnim'>e</div>
                        </div>
                        {/* Start-to-Finish Safety & Compliance Management Software */}
                    </h1>
                    <div className='overflow-hidden'>
                        <p>Save 10-20 hours per user per month with our all-digital, mobile-friendly compliance management software</p>
                    </div>
                    <Button label="Free Trial" />
                </Container>
            </div>
        </section>
    )
}

export default Landing