import React, { useState, useContext, useEffect } from "react";
import UserContext from "../components/UserContext";
import Home_1 from "./home/home_1";

//IMPORTING CONTRACT DATA
import { InversoX_NFTMarketplaceContext } from "../Context/InversoX_NFTMarketplaceContext";

export default function Home() {
  const { scrollRef } = useContext(UserContext);
  const {checkContract} = useContext(InversoX_NFTMarketplaceContext);

  useEffect(()=> {
    checkContract();
  }, []);

  useEffect(() => {
    window.scrollTo(0, scrollRef.current.scrollPos);
    const handleScrollPos = () => {
      scrollRef.current.scrollPos = window.scrollY;
    };
    window.addEventListener("scroll", handleScrollPos);
    return () => {
      window.removeEventListener("scroll", handleScrollPos);
    };
  });

  return (
    <>
      <Home_1 />
    </>
  );
}
