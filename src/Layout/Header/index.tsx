import React from "react";

const Header = () => {
    return(
        <div className="bg-purple-900 h-20 flex items-center px-12 justify-between">
            <h1 className="font-medium text-orange-400 text-xl">Mehmet Arda Çelik | UPayments Case Study</h1>
            <button className="shadow-2xl bg-orange-400 text-white p-3 rounded-xl">Add Product</button>
        </div>
    )
}

export default Header;