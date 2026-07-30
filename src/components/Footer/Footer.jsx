import React from 'react'
import './Footer.css'

function Footer() {
    const year = new Date().getFullYear();
    return(
        <footer className='site-footer'>
            <p>
                &copy;{year} Esha. Built with React
            </p>
            </footer>
    )
}

export default Footer; // We must