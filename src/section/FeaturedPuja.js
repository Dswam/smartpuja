import React from 'react'
import "../csscomponent/Featuredpujas.css"
import Product from "../Product"
console.log(Product)
const FeaturedPuja = () => {

  return (

    <div className='container'>
      <div className='row'>
        <div className='col-lg-12 featuredcol1'>
          <h1>Featured Pujas</h1>
          <p>These are most Popular Pujas and  Homas performed  by our Pandit</p>
        </div>
      </div>
      <div className='row featuredrowstyle'>
        {Product.map((data, key) => {
          return (
            <div className='col-lg-3 featuredcolStyle' key={data.id}>
              <img src={data.imgurl} alt={data.id} />
              <div>{data.title}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FeaturedPuja