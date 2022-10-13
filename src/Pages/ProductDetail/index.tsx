import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {fetchProduct} from "../../store/slices/productSlice";
import {useAppDispatch, useAppSelector} from "../../store";

const ProductDetail = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const productState = useAppSelector( state => state.products.product );
    const { productId } = location.state;
    const [ product, setProduct ] = useState<any>( productState.data || null  )

    useEffect(() => {
        dispatch(fetchProduct(productId));
    }, []);

    useEffect(  () => {
        setProduct(productState.data);
    },[productState])

    return(
        <>
            <div>
                <div>
                    <span>{productId}</span>
                </div>
            </div>
        </>
    )
}

export default ProductDetail;