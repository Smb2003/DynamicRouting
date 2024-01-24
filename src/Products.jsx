import React from 'react'
import { data } from './Data';
import Products_Item from './Products_Item';

const Products = () => {
  return (
    <div>
        <div className='bg-gray-300 lg:w-full lg:h-full p-4 rounded mb-4'>
            <h1 className='text-4xl text-center'>Products Rendering</h1>
        </div>
        <div className='flex flex-wrap p-[9px] align-middle justify-around w-full h-full bg-slate-100 '>
          {
            data.map((item,index)=>{
              return(
                <Products_Item item={item} keys={index}/>
              )
            })
          }
        </div>
    </div>
  )
}
export default Products;