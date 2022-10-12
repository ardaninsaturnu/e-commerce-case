import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {fetchAllProduct} from "../../store/slices/productSlice";

const Home = () => {
    const dispatch = useAppDispatch();
    const productState = useAppSelector(state => state.products);
    const products = productState?.data?.products;

    useEffect(() => {
        dispatch(fetchAllProduct())
    }, []);

    return (
        <>
            <div className="w-full lg:columns-4 sm:columns-3 gap-0.5 pt-5">
                {
                    products?.map(product => {
                        return (
                          <div className="w-[95%] mb-5 max-w-sm rounded-lg shadow-md bg-purple-900 mx-auto break-inside-avoid">
                            <div className="flex justify-center p-5">
                                <img className="max-h-auto w-full" src={product.avatar} alt=""/>
                            </div>
                            <div className="px-5 pb-5">
                              <a>
                                <h5 className="text-lg font-semibold tracking-tight text-gray-300">
                                    {product.name}
                                </h5>
                              </a>
                              <div className="flex items-center mt-2.5 mb-5">
                                <span className="bg-orange-300 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">{product.category}</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-2xl font-bold text-gray-100">${product.price}</span>
                                  <a href="#" className="text-white bg-orange-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                      See Detail
                                  </a>
                              </div>
                            </div>
                          </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;
