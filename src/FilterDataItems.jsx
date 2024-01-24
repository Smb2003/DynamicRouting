import React from 'react'
import { data } from './Data';
import { useParams, Link} from 'react-router-dom';

const FilterDataItems = () => {
    const params = useParams();
    const Filter = data.filter((items)=>{
        return params.id == items.id
    })
   
  return (
    <div>
        {
            Filter.map((data,index)=>{
                return(
                <div key={index} className="container">
                    <img src={data.image} alt="Cart"  />
                    <div className='innerContainer'>
                        <h5>{data.category}</h5>
                        <h1 className='text-3xl pb-5'>{data.title}</h1>
                        <h5  className='text-xl pb-5'>{data.description}</h5>
                        <span className='text-2xl'>Price: {data.price} $</span>
                        <br />
                        <Link to="/"><button className='Button'>Back To Page</button></Link>
                    </div>
                </div>
                    
                )
            })
        }

    </div>
  )
}
export default FilterDataItems;