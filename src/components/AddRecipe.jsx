import React from 'react'

const AddRecipe = () => {
  return (
    <div><div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3div col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Recipe Title</label>
            <input type="text" className="form-control" placeholder='Enter a title' /></div>
            
            <div className="row g-3div col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Creator</label>
            <input type="text" className="form-control" /></div>
            <div className="row g-3div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor=""className="form-label">Description</label>
                <textarea name="" id=""cols="30" rows="10" class="form-control"></textarea>
            </div>
            <div className="row g-3div col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">Upload Image</label>
                <input type="file" name="" id="" className="form-control" />
            </div>
            <div className="row g-3div col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6"><label htmlFor="" className="form-label">Recipe Type</label>
            <select name="" id="" class="form-select">
                <option value="select manufacturer">Select type</option>
                <option value="kia">veg pure</option>
                <option value="kognisegg">non veg</option>
            </select>
            </div>
            <div className="row g-3div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Ingredient</label>
            <textarea name="" id="" cols="30" rows="10" class="form-control"></textarea></div>
            <div className="row g-3div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn">Submit</button>btn-info</div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default AddRecipe
