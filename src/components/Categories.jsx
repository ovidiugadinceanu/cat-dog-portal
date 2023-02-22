const Categories =({pickCategory,categories})=>{
    return (<div>
      <h6 className="mt-1">Categories</h6>
      <select className="form-select mt-1" onChange={pickCategory}>
        <option>Choose a category</option>
        {categories.map(item=>(
        <option value={item.id}>{item.name}</option>
        ))}
      </select>
  </div>)
}

export default Categories