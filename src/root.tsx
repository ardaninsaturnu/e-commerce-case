import React from 'react';
import Layout from "./Layout";
import {Outlet} from "react-router-dom";

function Root() {
  return (
   <Layout>
       <Outlet />
   </Layout>
  );
}

export default Root;
