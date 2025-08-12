import React from 'react'
import { Link } from 'react-router-dom'

export default function Membership() {
    return (
        <>
            <div style={{
                backgroundImage: 'url("./Membership.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                color: "white",
                minHeight: "100vh"
            }} >
                <div className="container py-5">
                    <div className='m-5'>
                        <h2 className='text-center fw-bold'>Know Your Membership</h2>
                        <p className='text-center'>Rooted in Dharma. Rising with Courage. Remembering the Sacrifice.</p>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 p-4">
                            <div className='border rounded blur p-3'>
                                <h5 className='m-0 mb-2 px-3'>As a Member</h5>
                                <p className='m-0 mb-1 px-4'>1.Protocols</p>
                                <p className='m-0 mb-1 px-4'>1.Protocols</p>
                                <p className='m-0 mb-1 px-4'>1.Protocols</p>
                                <p className='m-0 mb-1 px-4'>1.Protocols</p>
                                <p className='m-0 mb-1 px-4'>1.Protocols</p>
                                <p className='m-0 mb-1 px-4'>1.Protocols</p>
                                <p className='m-0 mb-2 px-4'>1.Protocols</p>
                                <Link to='/'>
                                    <button className='w-100 btn btn-primary'>View More</button>
                                </Link>

                            </div>

                        </div>
                        <div className="col-12 col-md-6 p-4 ">
                            <div className='border rounded blur p-3'>
                                <h5 className='m-0 mb-2 px-3'>As a Member</h5>
                                <p className='m-0 mb-1 px-4'>1.Protocols</p>
                                <p className='m-0 mb-1 px-4'>1.Protocols</p>
                                <p className='m-0 mb-1 px-4'>1.Protocols</p>
                                <p className='m-0 mb-1 px-4'>1.Protocols</p>
                                <p className='m-0 mb-1 px-4'>1.Protocols</p>
                                <p className='m-0 mb-1 px-4'>1.Protocols</p>
                                <p className='m-0 mb-2 px-4'>1.Protocols</p>

                                <Link to='/'>
                                    <button className='w-100 btn btn-primary'>View More</button>
                                </Link>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
