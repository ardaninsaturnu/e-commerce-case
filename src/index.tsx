import React from 'react';
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './store';
import Root from './root';
import Home from './Pages/Home';
import Favorite from "./Pages/Favorite";
import ProductDetail from "./Pages/ProductDetail";
import CreateProduct from "./Pages/CreateProduct";
import ErrorPage from "./Pages/ErrorPage";
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

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

const root = ReactDOM.createRoot( document.getElementById("root") as HTMLElement );
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);