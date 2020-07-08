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
        <Category />
        <Products />
      </main>
    </React.Fragment>
  );
}
