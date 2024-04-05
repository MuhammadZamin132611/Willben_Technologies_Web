import React from 'react';
import Icon from '../assets/whatsapp-icon.png'
function WhatsappIcon() {
    return (
        <div className='container1'>
            {/* <i className="fa-brands fa-square-whatsapp icon-size "></i> */}
            <a href="https://wa.me/919650491945" className="whatsapp_float icon-size" target="_blank" rel="noopener noreferrer">
                <img src={Icon} alt="Whatsapp" className='z-3 img fixed-image' />
            </a>
        </div>
    );
}

export default WhatsappIcon;
