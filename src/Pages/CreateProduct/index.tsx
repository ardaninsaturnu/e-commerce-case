import UInput from "../../Component/uInput";
import {useNavigate} from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import React from "react";

interface IFormInput {
  Name: string;
  Price: number;
  Category: string;
  Description: string;
  Avatar: string;
  DeveloperEmail: string;
}

const CreateProduct = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState:{ errors }} = useForm<IFormInput>();
  const addProduct : SubmitHandler<IFormInput> = data => {

  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(addProduct)}>

        <div className="flex flex-col mb-1">
          <label className="text-orange-300 mb-1" htmlFor="Name">Product name:</label>
          <input
            { ...register( 'Name', { required: 'This place cant be empty' } ) }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="product name"
          />
          { errors.Name && (
            <p className="text-orange-900 flex gap-2 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {errors.Name.message }
            </p>
          )}
        </div>

        <div className="flex flex-col mb-1">
          <label className="text-orange-300 mb-1" htmlFor="Price">Product price:</label>
          <input
            { ...register( 'Price',{ required: 'This place cant be empty' } ) }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="product name"
          />
          { errors.Price && (
            <p className="text-orange-900 flex gap-2 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {errors.Price.message }
            </p>
          )}
        </div>

        <div className="flex flex-col mb-1">
          <label className="text-orange-300 mb-1" htmlFor="Category">Category:</label>
          <input
            { ...register( 'Category', { required: 'This place cant be empty' } ) }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="product category"
          />
          { errors.Category && (
            <p className="text-orange-900 flex gap-2 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {errors.Category.message }
            </p>
          )}
        </div>

        <div className="flex flex-col mb-1">
          <label className="text-orange-300 mb-1" htmlFor="">Description:</label>
          <input
            { ...register( 'Description',{ required: 'This place cant be empty' } ) }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="product description"
          />
          { errors.Description && (
            <p className="text-orange-900 flex gap-2 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {errors.Description.message }
            </p>
          )}
        </div>

        <div className="flex flex-col mb-1">
          <label className="text-orange-300 mb-1" htmlFor="">Avatar:</label>
          <input
            { ...register( 'Avatar',{ required: 'This place cant be empty' } ) }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="product description"
          />
          { errors.Avatar && (
            <p className="text-orange-900 flex gap-2 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {errors.Avatar.message }
            </p>
          )}
        </div>

        <div className="flex flex-col mb-1">
          <label className="text-orange-300 mb-1" htmlFor="">Developer Email:</label>
          <input
            { ...register( 'DeveloperEmail', { required: 'This place cant be empty' } ) }
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="email"
          />
          { errors.DeveloperEmail && (
            <p className="text-orange-900 flex gap-2 my-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
              {errors.DeveloperEmail.message }
            </p>
          )}
        </div>

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