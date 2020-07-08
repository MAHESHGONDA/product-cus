import React, { Component } from "react";
import OData from "react-odata";

class Category extends Component {
  state = {};
  render() {
    const baseUrl =
      "https://services.odata.org/Experimental/OData/(S(l3vkrglmrsqth3tkd51sxm0q))/OData.svc/Categories?$format=json";
    return (
      <React.Fragment>
        <div className="album py-5 bg-light">
          <h2>Category</h2>
          <div className="container">
            <div className="row">
              {/* <div className="col-md-4">
                <div className="card mb-4 shadow-sm"> */}
              <OData baseUrl={baseUrl}>
                {({ loading, error, data }) =>
                  this.onCategoryCallBack(loading, error, data)
                }
              </OData>
              {/* </div>
              </div> */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  onCategoryCallBack = (loading, error, data) => {
    if (error) {
      console.log("Error in loading Products", error);
    }
    if (data) {
      return data.value.map((category) => {
        const catName = category.Name;
        return (
          <React.Fragment>
            <div className="col-md-4">
              <div className="card mb-4 shadow-sm">
                <img
                  alt={catName}
                  src={process.env.PUBLIC_URL + "/images/" + catName + ".jpg"}
                />
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        {category.Name}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      });
    }
  };
}

export default Category;
