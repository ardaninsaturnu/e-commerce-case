import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../store";
import {fetchAllProduct} from "../../store/slices/productSlice";
import {NavLink} from "react-router-dom";

const Home = () => {
  const dispatch = useAppDispatch();
  const productState = useAppSelector(state => state.products.list);
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
              <div className="w-[95%] mb-5 max-w-sm rounded-lg shadow-md mx-auto break-inside-avoid">
                <div className="flex justify-center p-5">
                  <img className="max-h-auto w-full" src={product.avatar} alt=""/>
                </div>
                <div className="px-5 pb-5">
                  <a>
                    <h5 className="text-lg font-semibold tracking-tight text-orange-900">
                      {product.name}
                    </h5>
                  </a>
                  <div className="flex items-center mt-2.5 mb-5">
                    <span
                      className="bg-orange-300 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">{product.category}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-900"><span className="text-orange-400">$</span>{product.price}</span>
                    <NavLink
                      to={`/product-detail/${product._id}`}
                      state={{
                        productId: product._id
                      }}
                      className="shadow-2xl bg-orange-400 text-white p-2 rounded hover:bg-orange-700 focus:ring-2 focus:outline-none focus:ring-purple-900">
                      See Detail
                    </NavLink>
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
