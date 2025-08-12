import React from 'react'
import { Link } from 'react-router-dom'

export default function Magazine() {
    return (
        <>
            <div style={{
                backgroundImage: 'url("./Magazine.png")',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                color: "white",
                minHeight: "100vh"
            }} >
                <div className="container py-5">
                    <div className='m-5'>
                        <h2 className='text-center fw-bold mb-3'>Magazine</h2>
                        <p className='text-center'>Rooted in Dharma. Rising with Courage. Remembering the Sacrifice.</p>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 p-5 d-flex justify-content-center">
                            <div className='border rounded blur p-2'>
                                <img className="rounded text-center" src="./OIP 1.png" width={400} height={550} alt="" />
                            </div>

                        </div>
                        <div className="col-12 col-md-6 p-5 d-flex justify-content-center">
                            <div className='border rounded blur p-2'>
                                <img className="rounded " src="./OIP 1.png" width={400} height={550} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
