import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchProduct} from "../../store/slices/productSlice";
import {useAppDispatch, useAppSelector} from "../../store";

const ProductDetail = () => {
  const dispatch = useAppDispatch();
  const productState = useAppSelector(state => state.products.detail);
  const {id: productId} = useParams<string>()
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);

  useEffect(() => {
    setProduct(productState.data);
  }, [productState])

  return (
    <>
      <div className="max-w-7xl mx-auto p-5">
        <div className="flex gap-8">
          <div className="w-1/3">
            <img className="w-full" src={product?.product?.avatar} alt="ecommerce project"/>
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
}

export default ProductDetail;