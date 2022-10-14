import UInput from "../../Component/uInput";
import {useNavigate} from "react-router-dom";
import React from "react";

const CreateProduct = () => {
  const navigate = useNavigate()
  const addProduct = () => {}

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={addProduct}>
        <UInput name="name" label="Product name"/>
        <UInput name="price" type="number" label="Product price"/>
        <UInput name="category" label="Product category"/>
        <UInput name="description" label="Product description"/>
        <UInput name="avatar" type="file" label="Product avatar"/>
        <UInput name="email" label="Developer email"/>
        <div className="flex justify-between mt-3">
          <button
            className="bg-orange-400 text-white p-2 rounded w-[150px]"
            type="submit">
            Add Product
          </button>
          <button
            type="button"
            className="bg-orange-900 text-white p-2 rounded w-[150px]"
            onClick={() => navigate(-1) }>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateProduct;