import React, { Component } from 'react';
import qr from '../qr.png';
import '../Css/Foot.css';

class Footer extends Component {

    render() {
        return (
            <div className='row foot'>
                <div className='col-4'>
                    <h3>my infomation</h3>
                    <ul className='list-group'>
                        <li className='list-group-item'>
                            <i className="fa-solid fa-phone"></i>
                            <p>0847045594</p>
                        </li>

                        <li className='list-group-item'>
                            <i className="fa-solid fa-house"></i>
                            <p>CanTho city, VietNam</p>
                        </li>

                        <li className='list-group-item'>
                            <i className="fa-solid fa-envelope"></i>
                            <p>loc1906514@student.ctu.edu.vn</p>
                        </li>

                        <li className='list-group-item'>
                            <i class="fa-brands fa-facebook"></i>
                            <img className='img img-fluid' src={qr} alt="test"></img>
                        </li>
                    </ul>
                </div>

                <div className='col-4 my-auto'>
                    <h3>this project was create on 22/03/2022</h3>
                    <h3>@copywright BTL as cv</h3>
                </div>

                <div className='col-4'>
                    <h3>contact me!</h3>
                    
                    <form>
                        <div className='form-group mb-3'>
                            <label for='email' placeholder='Email' className='form-label'>label</label>
                            <input type={'email'} name='email' id='em' className='form-control' required></input>
                        </div>

                        <div className='form-group mb-3'>
                            <label for='contact' placeholder='Contact' className='form-label'>contact</label>
                            <textarea name='contact' className='form-control' required></textarea>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Footer;