const PhotoNumber=({numberOfPhotos})=>{

  return (<div>
          <h6 className="mt-1">Number of photos</h6>
      <select className="form-select mt-1" onChange={numberOfPhotos}>
          <option value="3">3</option>
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
      </select>
  </div>)
}

export default PhotoNumber