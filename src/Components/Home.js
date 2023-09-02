import React, { useEffect, useRef, useState } from 'react'
import gif from "../Img/remove.bg.gif"

const Home = () => {
  const fileInput = useRef();
  const [file, setFile] = useState();
  const [result, setResult] = useState();
  const handleChage = () => {
    fileInput.current.click();
  }
  useEffect(() => {
    const getImg = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
        setResult(data);
      }
    }
    getImg();


  }, [file])

  return (

    <div className='home'>
      {/* {console.log(result)} */}
      <div className='div-1'>
        <img src={gif} alt="gif-img" />
      </div>
      <div className='div-2'>
        <h1>Remove the background<br></br> from images for free.</h1>
        <p>Remove background from images of humans animals or objects and <br></br>download high-resolution images for free.</p>

        <button onClick={handleChage}>Choose File</button>
        <input style={{ display: 'none' }} className="inputtag" ref={fileInput} onChange={(e) => setFile(e.target.files[0])} type="file" />
        <p>Drop an image</p>
      </div>
    </div>
  )
}

export default Home
