import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Products from '../Products';
import FilterDataItems from '../FilterDataItems';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="" element={<Products/>}/>
            <Route path="products/:id" element={<FilterDataItems/>}/>

        </Route>
    )
)
const Routing = () => {
  return (
    <div>
       <RouterProvider router={router}/>
    </div>
  )
}
export default Routing;