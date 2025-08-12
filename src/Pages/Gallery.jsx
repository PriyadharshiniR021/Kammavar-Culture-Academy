import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallery() {
    return (
        <>
            <div style={{
                backgroundImage: 'url("./Gallery.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                color: "white",
                minHeight: "100vh"
            }} >
                <div className="container py-5">
                    <div className='m-5'>
                        <h2 className='text-center fw-bold'>Gallery</h2>
                        <p className='text-center'>Rooted in Dharma. Rising with Courage. Remembering the Sacrifice.</p>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 p-4">
                            <div className='border rounded blur p-2'>
                                <img className="w-100 rounded " src="./Gallery Temple.png" alt="" />
                            </div>

                        </div>
                        <div className="col-12 col-md-6 col-lg-4 p-4 ">
                            <div className='border rounded blur p-2'>
                                <img className="w-100 rounded " src="./Gallery Temple.png" alt="" />

                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 p-4 ">
                            <div className='border rounded blur p-2'>
                                <img className="w-100 rounded " src="./Gallery Temple.png" alt="" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
