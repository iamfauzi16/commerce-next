import Navbar from "../components/navbar";
import { Fragment } from "react";
import Header from "../components/header";
export default function Layout({children}) {
  return(
    <Fragment>
      <Navbar/>
      <main>
        <Header/>
        {children}
      </main>
    </Fragment>
  )
}