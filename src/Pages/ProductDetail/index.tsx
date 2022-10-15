import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {fetchProduct} from "../../store/slices/productSlice";
import {useAppDispatch, useAppSelector} from "../../store";
import Loading from "../../Component/LoadingSpinner";

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const productState = useAppSelector(state => state.products.detail );
  const loading = useAppSelector(state => state.products.detail.loading );
  const {id: productId} = useParams<string>()
  const [product, setProduct] = useState<any>(null);
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);

  useEffect(() => {
    setProduct(productState.data);
  }, [productState])

  return (
    loading ? (
      <Loading/>
    ) : (
      <>
        <div className="max-w-7xl mx-auto p-5">
          <button
            type="button"
            className="bg-orange-400 text-white p-2 rounded w-[150px] mb-5 flex gap-2"
            onClick={() => navigate(-1) }>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Back Home
          </button>
          <div className="flex gap-8 min-h-[400px]">
            <div className="w-1/3">
              <img className="w-full shadow-xl" src={product?.product?.avatar} alt="ecommerce project"/>
            </div>
            <div className="flex flex-1 flex-col justify-between">
              <div>
                <p className="text-4xl text-orange-400">{product?.product?.name}</p>
                <p className="text-xl text-orange-300">{product?.product?.description}</p>
                <p className="text-7xl text-orange-900">
                  <span className="text-orange-400">$</span>
                  {product?.product?.price}
                </p>
              </div>
              <div>
                <button className="bg-orange-400 text-white p-2 rounded">Delete Product</button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  )
}

export default ProductDetail;