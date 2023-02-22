import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";


const Upload = () => {
const [selectedFile,setSelectedFile]=useState(null)
const [errorMsg,setErrorMsg]=useState('')

  const handleSubmit=async()=>{
    const formData=new FormData()
    formData.append('file',selectedFile)
    
    const res=await fetch(`https://api.thecatapi.com/v1/images/upload`,{
      method: `POST`,      
      headers: { 
        // 'Content-Type': 'multipart/form-data' ,
        Accept: 'application/json',
        'x-api-key' : 'live_djf14H4jORp7ak77vThq3TqNIk3ckQSng9KvuMptR6uyZtQaIjPaTdt0Q9zxTJGi',
      }, 
      body: formData,
    })
    if(res.status===201){
      setErrorMsg('')
    }else{
      setErrorMsg("Invalid photo")
    }
  }

  const handleUpload=(e)=>{
      setSelectedFile(e.target.files[0])
  }

  return (  <div className="container-sm">
      <div className="mb-3">
        <label for="formFile" className="form-label" >Choose and upload a file</label>
        <input className="form-control" type="file" id="formFile" onChange={handleUpload}/>
        <button type="button" className="form-control btn btn-primary mt-2" onClick={handleSubmit}>Upload </button>
      </div>
      <h5>{errorMsg}</h5>
    </div>)
};

export default Upload;
