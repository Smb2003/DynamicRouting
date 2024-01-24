import React from "react";
import { useNavigate} from "react-router-dom";

const Products_Item = ({ item, keys }) => {
    const navigate = useNavigate(); 
  const {
    id,
    category,
    image,
    price,
    rating: { rate, count },
    title,
    description,
  } = item;
  const HandleClick = () => {
       navigate(`products/${id}`)
  }
  return (
    <div key={keys} onClick={()=>{HandleClick()}} className=" flex flex-col items-center lg:w-[400px] lg:h-[655px] w-full h-full border-slate-600 border-2 m-2 p-3 rounded-2xl cursor-pointer">
      <img src={image} className="w-[300px] h-[280px]" />
      <div className="mx-2 p-3">
      <h6 className="text-lg pb-4 font-semibold">Category-{category}</h6>
      <h1 className="text-2xl pb-4">{title}</h1>
      <h4 className="text-xl pb-4"> {description}</h4>
      <h1 className="text-xl pb-4">PRICE: {price} $.</h1>
      </div>
    </div>
  );
};
export default Products_Item;
