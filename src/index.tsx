import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import Home from './Pages/Home';
import ErrorPage from "./Pages/ErrorPage";
import {Provider} from 'react-redux';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {store} from './store';
import Favorite from "./Pages/Favorite";
import ProductDetail from "./Pages/ProductDetail";
import './index.css';
import CreateProduct from "./Pages/CreateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/favorite",
        element: <Favorite/>,
      },
      {
        path: "/create-product",
        element: <CreateProduct/>,
      },
      {
        path: "/product-detail/:id",
        element: <ProductDetail/>,
      }
    ]
  }
]);

ReactDOM.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>,
  document.getElementById('root')
)