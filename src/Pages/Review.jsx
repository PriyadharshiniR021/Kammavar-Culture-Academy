import React from 'react'
import { Link } from 'react-router-dom'

export default function Review() {
    return (
        <>
            <div className="px-2" style={{
                backgroundImage: 'url("./Review Bg.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                color: "white",
                minHeight: "100vh"
            }} >
                <div className="container py-5">
                    <div className='m-5 d-flex flex-column align-items-center'>
                        <h2 className=' fw-bold'>From The Hearts We Serve</h2>
                        <p className=''>Your suggestion and feedback open here</p>
                        <form>
                            <div className='d-flex gap-2'>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" />
                                </div>
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">@</span>
                                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <span class="input-group-text" id="basic-addon1">+91</span>
                                <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone Number" aria-describedby="basic-addon1" />
                            </div>
                            <div class="input-group mb-3">
                                <textarea class="form-control" placeholder='Message' aria-label="Message"></textarea>
                            </div>
                            <Link to='/'>
                                <button className='w-100 btn btn-primary'>Send Message</button>
                            </Link>

                        </form>
                    </div>


                </div>
            </div>
        </>
    )
}
