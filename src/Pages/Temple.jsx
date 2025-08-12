import React from 'react'
import { Link } from 'react-router-dom'

export default function Temple() {
    return (
        <>
            <div style={{
                backgroundImage: 'url("./Know Your Temple.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                color: "white",
                minHeight: "100vh"
            }} >
                <div className="container py-5">
                    <div className='m-5'>
                        <h2 className='text-center fw-bold'>Know Your Temple</h2>
                        <p className='text-center'>Rooted in Dharma. Rising with Courage. Remembering the Sacrifice.</p>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 p-4">
                            <div className='border rounded blur p-3'>
                                <img className="w-100 rounded " src="./Temple.png" alt="" />
                                <div className='border rounded blur_inside mt-2 p-2'>
                                    <h4 className='m-0 mb-1'>Temple Name</h4>
                                    <p className='m-0 mb-1'>Kulam</p>
                                    <Link to='/'>
                                        <button className='w-100 btn btn-primary'>View More</button>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-md-6 col-lg-4 p-4 ">
                            <div className='border rounded blur p-3'>
                                <img className="w-100 rounded " src="./Temple.png" alt="" />
                                <div className='border rounded blur_inside mt-2 p-2'>
                                    <h4 className='m-0 mb-1'>Temple Name</h4>
                                    <p className='m-0 mb-1'>Kulam</p>
                                    <Link to='/'>
                                        <button className='w-100 btn btn-primary'>View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 p-4 ">
                            <div className='border rounded blur p-3'>
                                <img className="w-100 rounded " src="./Temple.png" alt="" />
                                <div className='border rounded blur_inside mt-2 p-2'>
                                    <h4 className='m-0 mb-1'>Temple Name</h4>
                                    <p className='m-0 mb-1'>Kulam</p>
                                    <Link to='/'>
                                        <button className='w-100 btn btn-primary'>View More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
