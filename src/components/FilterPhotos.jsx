const FilterPhotos=({pictures})=>{
  
  return (<div className="row mt-2">
  {pictures.map((item)=>(
    <div className="col-4">
      <img src={item.url} width="400px" alt="cat"/>
    </div>
  ))}
</div>)
}

export default FilterPhotos