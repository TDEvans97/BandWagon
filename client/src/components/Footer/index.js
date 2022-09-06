import React from 'react';
import './style.css'
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <footer className=" footerBox w-100 mt-auto text-dark p-4">
            <div className="container text-center mb-5">
                <h4 className='footerText'>&copy; {new Date().getFullYear()} Bandwagon | All Rights Reserved</h4>
                {location.pathname !== '/' && (
                    <button
                        className="footerBtn btn btn-dark mb-3"
                        onClick={() => navigate(-1)}
                    >
                        &larr; Go Back
                    </button>
                )}
            </div>
        </footer>
    );
};

export default Footer;