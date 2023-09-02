import React from 'react'
import img1 from "../Img/Imgbg1.webp"
import img2 from "../Img/ImgRemoveBg2.webp"
import img3 from "../Img/PlacedNewBg3.webp"
const Four = () => {
  return (
    <div className='four-div'>
        <h1><span className='span-bg'>Try</span> it Out</h1>
        <p>See how easy to remove the background from your image</p>
        <div className='sample-img'>
            <img src={img1}  alt='img-1' />
            <img src={img2}  alt='img-2' />
            <img src={img3}  alt='img-3' />

        </div>
    </div>
  )
}

export default Four