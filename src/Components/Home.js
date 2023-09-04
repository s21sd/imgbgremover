import React, { useRef, useState } from 'react'
import gif from "../Img/remove.bg.gif"

const Home = () => {
  const fileInput = useRef();
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const handleChage = () => {
    fileInput.current.click();
  }


  const handleReq = async () => {
    const formData = new FormData();

    formData.append("image_file", file, file.name);

    const response = await fetch("https://sdk.photoroom.com/v1/segment",
      {
        method: "POST",
        headers: { "x-api-key": "538ccc8b199912c4f2b4ca6bbc08f237fb9248a2" },
        body: formData
      }
    )
      .then((res) => res.blob())
      .then((blob) => {
        const reader = new FileReader();   // To make a new Reader to read 
        reader.onloadend = () => {
          setResult(reader.result);

        };
        reader.readAsDataURL(blob);

      })
      .catch((error) => {

        console.error(error);
        console.log("error on my side");
      });
  }

  // To download a img



  const handleDownload = async () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = result;
    const timeNow = new Date();
    downloadLink.download = `${timeNow}/removed_background.png`;
    downloadLink.click();
  }



  return (

    <div className='home'>

      {console.log(result)}
      <div className='div-1'>
        <img src={gif} alt="gif-img" />
      </div>
      <div className='div-2'>
        <h1>Remove the background<br></br> from images for free.</h1>
        <p>Remove background from images of humans animals or objects and <br></br>download high-resolution images for free.</p>

        <button className='bg-btn1' onClick={handleChage}>Choose File</button>
        {
          file && (
            <div>
              <button className='bg-btn2' onClick={handleReq}>Remove Background</button>
              <button className='bg-btn2' onClick={handleDownload}>Download Image</button>
            </div>
          )

        }

        <input style={{ display: 'none' }} className="inputtag" ref={fileInput} onChange={(e) => setFile(e.target.files[0])} type="file" />
        <p>Drop an image</p>


      </div>
    </div>
  )
}

export default Home
