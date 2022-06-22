import "../css/App.css";
import "../css/Styles.css";
import * as React from "react";

import Navbar from "../Components/navbar";
import HeroSection from "../Components/hero_section";
import PasjaSection from "../Components/pasja_section";
import DoświadczeniuSection from "../Components/doświadczeniu_section";
import KontaktSection from "../Components/kontakt_section";
import Footer from "../Components/footer";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [data, setData] = useState({});
  const [isLoading, setLoadingState] = useState(false);

  useEffect(() => {
    setLoadingState(true);
    fetch("http://localhost:1337/api/pages?populate=*")
      .then((results) => results.json())
      .then((data) => {
        if (data && data.data) {
          setData(data.data[0].attributes);
          setLoadingState(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setLoadingState(false);
      });
  }, []);

  return (
    <>
      <Navbar marion={data} loading={isLoading} />
      <HeroSection marion={data} loading={isLoading} />
      <PasjaSection marion={data} loading={isLoading} />
      <DoświadczeniuSection marion={data} loading={isLoading} />
      <KontaktSection marion={data} loading={isLoading} />
      <Footer marion={data} loading={isLoading} />
    </>
  );
}
