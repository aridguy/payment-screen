import React, { useState, useEffect } from 'react';
import Logo from '../../Assets/logo.png'

import './Payment.css'

const Payment = () => {

    const [remainingTime, setRemainingTime] = useState(3 * 60); // Initial time in seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);
    const displayMinutes = Math.floor(remainingTime / 60);
    const displaySeconds = remainingTime % 60;

    const [cardNumber, setCardNumber] = useState('');

    const limitAndFormatCardNumber = (event) => {
        const input = event.target;
        const value = input.value.replace(/\s/g, ''); // Remove existing spaces
        const formattedValue = formatCardNumber(value);

        setCardNumber(formattedValue);
    };

    const formatCardNumber = (value) => {
        let formattedValue = '';
        let chunkSize = 4;
        let index = 0;

        while (index < value.length) {
            formattedValue += value.substr(index, chunkSize) + ' ';
            index += chunkSize;
        }

        return formattedValue.trim();
    };



    return (

        <div>
            <main className="mt-5">
                <div className="container">

                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-9">
                                    <img width='30' src={Logo} alt="logo-icon" /> <b className="font-poppins">AceCoin</b><span className="font-poppins">Pay</span>
                                </div>
                                <div className="col-md-3">
                                    <div className="timerCount mt-1">
                                        <div className="d-flex gap-2">
                                            <div className="bx1">{displayMinutes < 10 ? `0${displayMinutes}` : displayMinutes}</div>
                                            <div className="bx1">1</div>
                                            <span className="timerSeparator">:</span>
                                            <div className="bx1">{displaySeconds < 10 ? `0${displaySeconds}` : displaySeconds}</div>
                                            <div className="bx1">9</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="col-md-10">
                                    <b className="brandColor font-poppins">Card Number</b> <br />
                                    <small className="font-poppins">Enter 16-digit card number on the card</small>
                                </div>
                                <div className="col-md-2">
                                    <div className="">
                                        <i className="fas fa-pen brandColor"></i><span className="brandColor"> Edit</span>
                                    </div>
                                </div>
                            </div>

                            <div className="row mt-3">
                                <div className="col-md-12">
                                    <div className="cardDetails">

                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="creditCard">
                                                    <input type="text" className="form-control card16digits" id="cardNumberInput" value={cardNumber}
                                                        maxLength={19}
                                                        onChange={limitAndFormatCardNumber} placeholder='4324 - 4543 - 7497 - 9956' />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-4">
                                            <div className="col-md-5">
                                                <div className="creditCard">
                                                    <div className="col-md-10">
                                                        <b className="brandColor font-poppins">CVV Number</b> <br />
                                                        <small className="font-poppins">Enter 16-digit card number on the card</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="creditCard">
                                                    <input type="number" className="form-control cvv" maxlength="4" placeholder='4 3 2' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-md-5">
                                                <div className="creditCard">
                                                    <div className="col-md-10">
                                                        <b className="brandColor font-poppins">Expiry Date</b> <br />
                                                        <small className="font-poppins">Enter the expiration date of the card</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="creditCard">
                                                    <div className="d-flex">
                                                        <div> <input type="number" className="form-control exp-month" placeholder='12' /></div>
                                                        <div className=""><b className="demacate">/</b></div>
                                                        <div className="mx-3"> <input type="number" className="form-control exp-year" placeholder='0 9' /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-4">
                                            <div className="col-md-5">
                                                <div className="creditCard">
                                                    <div className="col-md-10">
                                                        <b className="brandColor font-poppins">Password</b> <br />
                                                        <small className="font-poppins">Enter your dynamic password</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-7">
                                                <div className="creditCard">
                                                    <input type="password" className="form-control cvv" placeholder='**********' />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mt-5">
                                            <div className="col-md-12">
                                                <button className="btn btn-primary butinPay">Pay Now</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className='row'>

                            </div>
                            <div className='row'>
                                <div className='topCardOwner p-2'>
                                    <div className='row mx-2'>
                                        <div className='col-md-6'><i className="fas fa-sim-card"></i></div>
                                        <div className='col-md-3'></div>
                                        <div className='col-md-3'><i className="fas fa-wifi"></i></div>
                                    </div>
                                    <div className='row mt-5 mx-2'>
                                        <div className='col-md-12'>
                                            <sup>Jonathan Michael</sup><br /> <b>.... 3454</b>
                                        </div>
                                    </div>
                                    <div className='row mt-3'>
                                        <div className='col-md-12'>
                                            <div className='d-flex gap-5'>
                                                <small>09/22</small>
                                                <img className='mx-4' width='25' src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg' alt='masrwe card' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='invoiceBkgWrap'>
                                
                                    <div className='container'>
                                        <div className='row lastRow'>
                                        
                                            <div className='col-md-6'>
                                                <div>Company</div>
                                                <div>Order Number</div>
                                                <div>Product</div>
                                                <div>VAT (20%)</div>
                                            </div>
                                            <div className='col-md-6 brandColor'>
                                                <div>Apple</div>
                                                <div>858657984</div>
                                                <div>MacbooAir</div>
                                                <div>$230</div>
                                            </div>
                                            <hr className='mt-5 liner' />
                                            <div className='row mt-2'>
                                                <div className='col-md-8'>
                                                    <span>You have to pay</span> <br />
                                                    <span className='amount brandColor'>594</span> <sub>.99</sub> <span className='denomination brandColor'>USD</span>
                                                </div>
                                                <div className='col-md-4'><i className="fas fa-receipt receipt"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}

export default Payment