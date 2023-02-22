import React, { useEffect, useState } from "react";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyImages = () => {
  const [myImages,setMyImages]=useState([])
  const [myFavourites,setMyFavourites]=useState([])
  
  const getImages=async()=>{
    const res=await fetch('https://api.thecatapi.com/v1/images/?limit=10&page=0&order=DESC',{
      headers: {
        'x-api-key' : 'live_djf14H4jORp7ak77vThq3TqNIk3ckQSng9KvuMptR6uyZtQaIjPaTdt0Q9zxTJGi'
      },
    })
    if(res.status===200){
      const data=await res.json()
      console.log(data)
      setMyImages([...data])
    }
  }

  const deleteImage=async(id)=>{
    const res=await fetch(`https://api.thecatapi.com/v1/images/${id}`,{
      method:'DELETE',
      headers:{
        'x-api-key' : 'live_djf14H4jORp7ak77vThq3TqNIk3ckQSng9KvuMptR6uyZtQaIjPaTdt0Q9zxTJGi',
        'Content-Type': 'application/json',
      }
    })
    if(res.status===204){
      let copyImages=myImages.filter((item)=>item.id!==id)
      setMyImages([...copyImages])
      let copyFavorites=myFavourites.filter((item)=>item.image_id!==id)
      setMyFavourites([...copyFavorites])
    }
  }

  const favoriteImage=async(id)=>{
    await fetch(`https://api.thecatapi.com/v1/favourites`,{
      method: 'POST',
      headers: {
        'x-api-key' : 'live_djf14H4jORp7ak77vThq3TqNIk3ckQSng9KvuMptR6uyZtQaIjPaTdt0Q9zxTJGi',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"image_id": id})
    })
    getFavourites()
  }

  const getFavourites =async()=>{
    const res=await fetch(`https://api.thecatapi.com/v1/favourites`,{
      headers:{
        'x-api-key' : 'live_djf14H4jORp7ak77vThq3TqNIk3ckQSng9KvuMptR6uyZtQaIjPaTdt0Q9zxTJGi',
        'Content-Type': 'application/json',
      }
    })

    if(res.status===200){
      const data=await res.json()
      console.log(data)
      setMyFavourites(data)
    }
  }

  const deleteFavourite=async(id)=>{
    const res=await fetch(`https://api.thecatapi.com/v1/favourites/${id}`,{
      method:'DELETE',
      headers:{
        'x-api-key' : 'live_djf14H4jORp7ak77vThq3TqNIk3ckQSng9KvuMptR6uyZtQaIjPaTdt0Q9zxTJGi',
        'Content-Type': 'application/json',
      }
    })
    if(res.status===200){
      let copyArr=myFavourites.filter((item)=>item.id!==id)
      setMyFavourites([...copyArr])
    }
  }

  useEffect(()=>{
    getImages()
    getFavourites()
  },[])



  return (<div className="container">
            {/* <Carousel showArrows={true} width="900px">           
                {myImages.map((item)=>(
                  <div>
                    <img src={item.url} alt="cats" />
                    <button className="btn btn-danger mt-2" onClick={()=>deleteImage(item.id)}>Delete</button>
                  </div>
                ))}             
            </Carousel> */}
            <h3 className="mt-2">My Images</h3>
            <div className="row">
            {myImages.map((item)=>(
                  <div className="col-4 mt-2">
                    <img src={item.url} alt="cats" width="400px"/>
                    <div className="d-flex justify-content-between">
                      <button className="btn btn-danger mt-1" onClick={()=>deleteImage(item.id)}>Delete</button>
                      <button className="btn btn-warning mt-1" onClick={()=>favoriteImage(item.id)}>Favourite</button>
                    </div>
                  </div>
            ))}
            </div>
            <h3 className="mt-2">Favourites</h3>
            <div className="row mt-2">
              {myFavourites.filter((item)=>item.image.url).map((item)=>(
                <div className="col-4 mt-2 mb-2">
                  <img src={item.image.url} alt="cat" width="400px"/>
                  <button className="btn btn-danger mt-1" onClick={()=>deleteFavourite(item.id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>);
};

export default MyImages;
