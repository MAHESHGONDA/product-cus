import React, { Component } from "react";
import OData from "react-odata";
import Product from "./Product";

class Products extends Component {
  state = {};
  render() {
    const baseUrl =
      "https://services.odata.org/Experimental/OData/(S(l3vkrglmrsqth3tkd51sxm0q))/OData.svc/Products?$format=json";
    // https://services.odata.org/V2/Northwind/Northwind.svc/Products?$format=json
    // const baseUrl = "http://services.odata.org/V4/TripPinService/People";
    // const query = { filter: { FirstName: "Russell" } };
    return (
      //const query = { filter: { FirstName: 'Russell' } };
      <React.Fragment>
        <div className="">
          <h2>Products</h2>
        </div>
        <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar tableFixHead">
          <table className="table">
            <thead className="thead-dark ">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <OData baseUrl={baseUrl}>
                {({ loading, error, data }) =>
                  this.onProductCallBack(loading, error, data)
                }
              </OData>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    //
  }
  onProductCallBack = (loading, error, data) => {
    console.log("products call back :");

    if (error) {
      console.log("Error in loading Products", error);
    }
    if (data) {
      return data.value.map((product) => {
        return <Product key={product.ID} product={product}></Product>;
      });
    }
  };
}

export default Products;
