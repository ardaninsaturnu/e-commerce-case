import React, {useEffect, useState} from "react";

const Home = () => {
    const [products, setProducts] = useState<any>(null)

    useEffect(() => {
        (
            async () => {
                let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1laG1ldGFyZGEuY2VsaWtAaG90bWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vYXJkYW5pbnNhdHVybnUiLCJpYXQiOjE2NjU1MDUxMDYsImV4cCI6MTY2NTkzNzEwNn0.zeXT9Qopzz1cKktarRrRWE4n_-UtXuI5Cdvr98Rl-Pg'

                await fetch( 'https://upayments-studycase-api.herokuapp.com/api/products', {
                    method: 'GET',
                    mode: "cors",
                    cache: "no-cache",
                    headers: {"Authorization": `Bearer ${token}`}
                })
                    .then( response => response.json() )
                    .then( data => setProducts( data ) )
                    .catch( error => console.error( error ) )

        })()

        console.log(products)
    },[]);

    return(
        <>
            <h1 className="text-amber-400">All products</h1>
            <div className="flex flex-row flex-wrap text-black">

            </div>
        </>
    )
}

export default Home;

