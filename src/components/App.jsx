import React from "react";
import Products from "./Products";
import Category from "./Category";

export default function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand">Northwind OData</a>
      </nav>
      <main role="main" className="container py-5">
        <div className="row pt-5">
          <Products className="album  bg-light" />
        </div>
      </main>
      <footer className="fixed-bottom ">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
          <a className="navbar-brand"></a>
        </nav>
      </footer>
    </React.Fragment>
  );
}
