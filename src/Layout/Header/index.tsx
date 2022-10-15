import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-orange-100 h-20 flex items-center px-12 justify-between">
      <h1 className="font-medium text-orange-400 text-xl">Mehmet Arda Çelik | UPayments Case Study</h1>
      <NavLink to="/create-product" className="shadow-2xl bg-orange-400 bg-orange-400 text-white p-2 rounded">Add Product</NavLink>
    </div>
  )
}

export default Header;