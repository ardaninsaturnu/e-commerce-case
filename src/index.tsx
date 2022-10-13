import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import Home from './Pages/Home';
import ErrorPage from "./Pages/ErrorPage";
import { Provider } from 'react-redux';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { store } from './store';
import './index.css';
import CreateProduct from "./Pages/CreateProduct";
import Favorite from "./Pages/Favorite";

const router = createBrowserRouter([
    {
        element: <Root/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home/>,
                errorElement: <ErrorPage />,
            },
            {
                path: "/favorite",
                element: <Favorite/>,
                errorElement: <ErrorPage />,
            },
            {
                path: "/create-product/:id",
                element: <CreateProduct/>,
                errorElement: <ErrorPage />,
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