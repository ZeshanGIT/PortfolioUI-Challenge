import React from 'react'
import diamonds from './images/diamonds.png';
import poppinshades from './images/poppin-shades.png';
import sexyorange from './images/sexy-orange.png'

const Content = () => {
    return (
        <div className="Content">
            <p className="main-title">OLADIMEJI ODUNSI</p>
            <img src={diamonds} alt="" className="side-img left"/>
            <img src={poppinshades} alt="" className="main-img"/>
            <img src={sexyorange} alt="" className="side-img right"/>
        </div>
    );
}

export default Content;