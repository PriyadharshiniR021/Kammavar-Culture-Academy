import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className='container py-5 text-light '>
          <div className="row">
            <div className="col-12 px-5 col-lg-5">
              <h4 className='fw-semibold mb-4'>Kammavar Cultural Academy</h4>
              <p >A government registered charitable trust dedicated to preserving the rich culture and traditions of the Kammavar Naidu community while ensuring a bright future for our children.</p>
            </div>
            <div className="col-12 px-5 col-lg-3">
              <h4 className='fw-semibold mb-4'>Quick Links</h4>
              <p className='m-0'>About</p>
              <p className='m-0'>Services</p>
              <p className='m-0'>Members</p>
              <p className='m-0'>Contact</p>
              <p className='mb-3'>Govt Reg No:69/2024</p>
            </div>
            <div className="col-12 px-5 col-lg-3">
              <h4 className='fw-semibold mb-4'>Connect With Us</h4>
              <p className='m-0'>
                <a href="tel:+919876543210" className="text-decoration-none text-light">
                  <FaPhoneAlt className='m-2' /> +91 98765 43210
                </a>
              </p>
              <p className='m-0'>
                <a href="mailto:yourmail@gmail.com" className="text-decoration-none text-light">
                  <FaEnvelope className='m-2' /> yourmail@gmail.com
                </a>
              </p>
              <p className='m-0'>
                <a
                  href="https://www.google.com/maps?q=Kammavar+Cultural+Academy,Coimbatore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-light"
                >
                  <FaMapMarkerAlt className='m-2' /> Kammavar Cultural Academy, Coimbatore
                </a>
              </p>            </div>
            <hr className='border-light mt-5 mb-0' />
            <p className='mb-0 text-center text-light p-3 mt-5'>© 2025 Kammavar Cultural Academy. All rights reserved.</p>

          </div>
        </div>

      </div>
    </>
  )
}  
