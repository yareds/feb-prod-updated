import React from "react";
import Header from "./Header";
import RegForm from "./RegForm";




function Home() {
  return (
    <>
      <Header />
      <h1 style={{ fontSize: "80px" }}>Welcome Home!</h1>;
    <RegForm />
    </>
  );
}

export default Home;
