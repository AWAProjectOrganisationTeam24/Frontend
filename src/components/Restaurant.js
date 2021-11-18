import React from "react";
import Header from "./Header";

import resimg from "./res.jpeg";
function Restaurant() {
  const imgheight = {
    height: "300px",
  };
  return (
    <div>
      {/* header */}
      <Header />
   

      <div className="container mt-4">
        <div className="row ">
          <div className="col-md-12">
            <div class="card">
              <img
                class="card-img-top"
                style={imgheight}
                src={resimg}
                alt="img2"
              />
              <div class="card-body">
                <h5 class="card-title">restaurantsName</h5>
                <i className="fas fa-solid fa-map-marker-alt"></i>
                <small> Location</small>
                <address class="card-text">address</address>
                <small className="">
                  <span class="badge badge-success">Open</span>
                </small>

                <h1 className="text-center">Menu</h1>
              </div>

            </div>
          </div>
        </div>

        <div className="row mt-2">
                <div className="col-md-3">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={resimg}
                      alt="img1"
                    />
                    <div class="card-body">
                      <h5 class="card-title">pizza</h5>

                      <address class="card-text">$ 20.00</address>
                      <small className="">
                        <span class="badge badge-success">available</span>
                        <button className="btn btn-warning">
                          
                          + Add to cart
                        </button>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-md-3"> <div class="card">
                    <img
                      class="card-img-top"
                      src={resimg}
                      alt="cap"
                    />
                    <div class="card-body">
                      <h5 class="card-title">pizza</h5>

                      <address class="card-text">$ 20.00</address>
                      <small className="">
                        <span class="badge badge-success">available</span>
                        <button className="btn btn-warning">
                          {" "}
                          + Add to cart
                        </button>
                      </small>
                    </div>
                  </div></div>
                <div className="col-md-3"> <div class="card">
                    <img
                      class="card-img-top"
                      src={resimg}
                      alt="cap2"
                    />
                    <div class="card-body">
                      <h5 class="card-title">pizza</h5>

                      <address class="card-text">$ 20.00</address>
                      <small className="">
                        <span class="badge badge-success">available</span>
                        <button className="btn btn-warning">
                        
                          + Add to cart
                        </button>
                      </small>
                    </div>
                  </div></div>
                <div className="col-md-3"> <div class="card">
                    <img
                      class="card-img-top"
                      src={resimg}
                      alt=" cap3"
                    />
                    <div class="card-body">
                      <h5 class="card-title">pizza</h5>

                      <address class="card-text">$ 20.00</address>
                      <small className="">
                        <span class="badge badge-success">available</span>
                        <button className="btn btn-warning">
                          {" "}
                          + Add to cart
                        </button>
                      </small>
                    </div>
                  </div></div>
              </div>

              <div className="row mt-4">
                <div className="col-md-3">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src={resimg}
                      alt="cap1"
                    />
                    <div class="card-body">
                      <h5 class="card-title">pizza</h5>

                      <address class="card-text">$ 20.00</address>
                      <small className="">
                        <span class="badge badge-success">available</span>
                        <button className="btn btn-warning">
                          {" "}
                          + Add to cart
                        </button>
                      </small>
                    </div>
                  </div>
                </div>
                <div className="col-md-3"> <div class="card">
                    <img
                      class="card-img-top"
                      src={resimg}
                      alt=" cap4"
                    />
                    <div class="card-body">
                      <h5 class="card-title">pizza</h5>

                      <address class="card-text">$ 20.00</address>
                      <small className="">
                        <span class="badge badge-success">available</span>
                        <button className="btn btn-warning">
                       
                          + Add to cart
                        </button>
                      </small>
                    </div>
                  </div></div>
                <div className="col-md-3"> <div class="card">
                    <img
                      class="card-img-top"
                      src={resimg}
                      alt="img4"
                    />
                    <div class="card-body">
                      <h5 class="card-title">pizza</h5>

                      <address class="card-text">$ 20.00</address>
                      <small className="">
                        <span class="badge badge-success">available</span>
                        <button className="btn btn-warning">
                         
                          + Add to cart
                        </button>
                      </small>
                    </div>
                  </div></div>
                <div className="col-md-3"> <div class="card">
                    <img
                      class="card-img-top"
                      src={resimg}
                      alt="img5"
                    />
                    <div class="card-body">
                      <h5 class="card-title">pizza</h5>

                      <address class="card-text">$ 20.00</address>
                      <small className="">
                        <span class="badge badge-success">available</span>
                        <button className="btn btn-warning">
                       
                          + Add to cart
                        </button>
                      </small>
                    </div>
                  </div></div>
              </div>
      </div>
    </div>
  );
}

export default Restaurant;
