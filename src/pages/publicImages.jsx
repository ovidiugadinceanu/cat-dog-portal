import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import { useEffect } from "react";
import { useState } from "react";
import PhotoNumber from "../components/PhotoNumber";
import Categories from "../components/Categories";
import FilterPhotos from "../components/FilterPhotos";

const PublicImages = () => {
  const [categories,setCategories]=useState([])
  const [pictures,setPictures]=useState([])
  const [numOfPhotos,setNumOfPhotos]=useState(3)
  const [pickCategory,setPickCategory]=useState('')

  const getCategories=async()=>{
    const res=await fetch(`https://api.thecatapi.com/v1/categories`)
    if(res.status===200){
      const data=await res.json()
      setCategories([...data])
    }
  }

  const getPictures=async()=>{
    const res=await fetch(`https://api.thecatapi.com/v1/images/search?format=json&limit=${numOfPhotos}&category_ids=${pickCategory}`,{
      headers:{
        'x-api-key' : 'live_djf14H4jORp7ak77vThq3TqNIk3ckQSng9KvuMptR6uyZtQaIjPaTdt0Q9zxTJGi',
        'Content-Type': 'application/json',
      }
    })
    if(res.status===200){
      const data=await res.json()
      setPictures([...data])
    }
  }
  console.log(categories)
  useEffect(()=>{
    getCategories()
    getPictures()
  },[numOfPhotos,pickCategory])

  return (<div className="container">
        <Categories
          pickCategory={(e)=>setPickCategory(e.target.value)}
          categories={categories}    
        />
        <PhotoNumber
        numberOfPhotos={(e)=>setNumOfPhotos(e.target.value)}
        />
        <FilterPhotos
        pictures={pictures}
        />
      {/* <div className="row mt-2">
        {pictures.map((item)=>(
          <div className="col-4">
            <img src={item.url} width="400px" alt="cat"/>
          </div>
        ))}
      </div> */}
    </div>);
};

export default PublicImages;
