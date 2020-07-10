import React, { Component } from "react";
import OData from "react-odata";
import Product from "./Product";
import Pagination from "./Pagination";

class Products extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
  }
  state = {
    productsCount: 11,
    top: 10,
    skip: 0,
    activePage: 1,
    productsPerPage: 10,
  };
  render() {
    const { top, skip } = this.state;

    const baseUrl =
      "https://services.odata.org/Experimental/OData/(S(l3vkrglmrsqth3tkd51sxm0q))/OData.svc/Products?$top=" +
      top +
      "&$skip=" +
      skip +
      "&$format=json";

    // https://services.odata.org/V2/Northwind/Northwind.svc/Products?$format=json
    // const baseUrl = "http://services.odata.org/V4/TripPinService/People";

    const countUrl =
      "https://services.odata.org/Experimental/OData/(S(l3vkrglmrsqth3tkd51sxm0q))/OData.svc/Products/$count";
    return (
      //const query = { filter: { FirstName: 'Russell' } };
      <React.Fragment>
        <div className="">
          <OData baseUrl={countUrl}>
            {({ loading, error, data }) =>
              this.displayCount(loading, error, data)
            }
          </OData>
        </div>

        <div className="table-responsive table-wrapper-scroll-y my-custom-scrollbar tableFixHead">
          <table className="table table-sm">
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
                {
                  ({ loading, error, data }) =>
                    this.onProductCallBack(loading, error, data)

                  //
                }
              </OData>
            </tbody>
          </table>
        </div>
        <Pagination
          productsCount={this.state.productsCount}
          productsPerPage={this.state.productsPerPage}
          activePage={this.state.activePage}
          onPageChange={this.onPageChange}
        />
      </React.Fragment>
    );
  }
  onPageChange = (pageNo) => {
    console.log("page change:", pageNo);
    // this.setState({ activePage: pageNo });
    const top = this.state.productsPerPage * pageNo;
    let skip = top - this.state.productsPerPage;
    // if (skip < 0) {
    //   skip = 0;
    // }
    this.setState({
      top: top,
      skip: skip,
      activePage: pageNo,
    });
  };
  componentDidMount() {
    debugger;
  }
  displayCount = (loading, error, data) => {
    //
    if (data) {
      debugger;
      this.count = parseInt(new TextDecoder("utf-8").decode(data));
      // this.setState({productsCount:count});
      const text = "Products (" + this.count + ")";
      return <h3>{text}</h3>;
    }
  };
  onProductCallBack = (loading, error, data) => {
    console.log("products call back :");

    if (loading) {
      return <span>Loading</span>;
    }

    if (error) {
      console.log("Error in loading Products", error);
    }
    if (data) {
      if (data.value.length > this.state.productsPerPage) {
        data.value.pop();
      }
      return data.value.map((product) => {
        return <Product key={product.ID} product={product}></Product>;
      });
    }
  };
}

export default Products;
