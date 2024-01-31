import React, {useState} from 'react';
import Webcam from 'react-webcam';

const WebcamCapture = () => {
    const webcamRef = React.useRef(null);
    const videoConstraints = {
      width : 700,
      height : 500,
      facingMode: 'user'
    };
    const[name, setName] = useState('')
    // const[disease,setDisease]=useState(' ')
    const login = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      const post_options={
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({'img':imageSrc})
      }
      console.log(post_options)
      fetch('http://127.0.0.1:5000/login', post_options)
      .then(
        res => res.json()
      )
            .then(res => {
              console.log(`response = ${res}`)
              setName(res.data)
      })
            .catch(error => {
              console.log(`error = ${error}`)
      })
    }, 
     [webcamRef]
    );
    const register = React.useCallback(
      () => {
        console.log("executed")
        const imageSrc = webcamRef.current.getScreenshot();
        const post_options={
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(imageSrc)
        }
        fetch('http://127.0.0.1:5000/register', post_options)
        .then(
        res => console.log(res))
              .catch(error => {
                console.log(`error = ${error}`)
        })
      }, 
       [webcamRef]
      );
    return (
    <div>
      <Webcam
       audio = {false}
       height = {300}
       ref = {webcamRef}
       mirrored={true}
       screenshotFormat = "image/jpeg"
       width = {350}
       videoConstraints = {videoConstraints}
      />
      <button onClick={login}>Login</button>
      <button onClick={register}>Register</button>
      <h2>{name}</h2>
    </div>
      );
    
  };

  export default WebcamCapture;