import React from 'react'
import performed from  "../image/perfomed.svg"
import pandit from  "../image/pandit.svg"
import unique from  "../image/unique.svg"
import "../csscomponent/middlesection.css";
const MiddileSection = () => {
    return (
        <div className='container midcon'>
            <div className='row '>
                <div className='col-lg-4 col-sm-12 MIDCOL'>
                    <img src={performed} alt=""/>
                    <h1>25000+</h1>
                    <p>PUJAS AND HOMAS PERFORMED</p>
                </div>
                <div className='col-lg-4 col-sm-12 MIDCOL'>
                <img src={pandit} alt=""/>
                    <h1>1200+</h1>
                    <p>PANDIT AND PUROHITS</p>
                </div>
                <div className='col-lg-4 col-sm-12 MIDCOL'>
                <img src={unique}alt=""/>
                    <h1>400+</h1>
                    <p>TOTAL UNIQUE SERVICE </p>
                </div>
            </div>
        </div>

    )
}

export default MiddileSection