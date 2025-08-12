import React from 'react'
import { Link } from 'react-router-dom'

export const Service = () => {
    return (
        <>
            <div className="px-2" style={{
                backgroundImage: 'url("./Our Services.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                color: "white"
            }} >
                <div className="container py-5">
                    <div className='m-5'>
                        <h2 className='text-center fw-bold'>Our Service</h2>
                        <p className='text-center'>Rooted in Dharma. Rising with Courage. Remembering the Sacrifice.</p>
                    </div>
                      <div className="row p-3 py-4 blur rounded">
                        <div className="col-12">
                            <img className="w-100 rounded" src="./Service_1.png" alt="" />
                        </div>
                        <div className="col-12">
                            <div className='p-3 rounded mt-3 blur_inside'>
                                <h4>Educational  Services</h4>
                                <p>This is about educational content based</p>
                                <Link to="/">

                                    <button className='w-100 btn btn-primary'>View More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row p-3 py-4 blur rounded mt-5">
                        <div className="col-12">
                            <img className="w-100 rounded" src="./Service_1.png" alt="" />
                        </div>
                        <div className="col-12">
                            <div className='p-3 rounded mt-3 blur_inside'>
                                <h4>Spiritual Based Services</h4>
                                <p>This is about spiritual content based</p>
                                <Link to="/">

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
