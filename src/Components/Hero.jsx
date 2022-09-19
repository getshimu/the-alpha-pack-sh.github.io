import React from 'react'
import BgImage from '../Images/Asset_9@4x.png'
import Button from './Button';

function Hero() {
    return (
        <>
            <div className=' flex justify-center mt-28'>
                <img className=' w-1/3' src={BgImage} alt="" />
            </div>
            <h2 className='text-center custom-font text-5xl mt-10'>The moon brought out the Wolf</h2>
            <div className=' flex justify-center mt-8'>
                <Button className="custom-font">Mint Now!</Button>
            </div>

        </>
    )
}

export default Hero