import React from 'react'
import Header from "../layouts/header";
import Footer from "../layouts/footer";



function layout( {children} ) {
  return (
    <div>
      <>
      <Header/>
      <div> {children} </div>
      <Footer/>
      </>
      
    </div>
  )
}

export default layout
