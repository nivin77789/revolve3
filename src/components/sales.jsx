import React from "react";
import "../App.css";
import "./sales.css";

function Sales() {
  return (
    <div className="sale-down">
      <div className="sale-d-top">
        <div>
          <h1>Today's Sales</h1>
          <p>Sales Summery</p>
        </div>
        <div className="exp-button">
          <span className="material-symbols-outlined">upload</span>
          <p>Export</p>
        </div>
      </div>
      <div className="sale-d-bot">
        <div className="box box1">
          <div className="round1">
            <span className="material-symbols-outlined">lab_profile</span>
          </div>
          <h4>$1k</h4>
          <h2>Total Sales</h2>
          <h3>+8% from yesterday</h3>
        </div>
        <div className="box box2">
          <div className="round2">
            <span className="material-symbols-outlined">feed</span>
          </div>
          <h4>$1k</h4>
          <h2>Total Sales</h2>
          <h3>+8% from yesterday</h3>
        </div>
        <div className="box box3">
          <div className="round3">
            <span className="material-symbols-outlined">inventory_2</span>
          </div>
          <h4>$1k</h4>
          <h2>Total Sales</h2>
          <h3>+8% from yesterday</h3>
        </div>
        <div className="box box4">
          <div className="round4">
            <span className="material-symbols-outlined">person_add</span>
          </div>
          <h4>$1k</h4>
          <h2>Total Sales</h2>
          <h3>+8% from yesterday</h3>
        </div>
      </div>
    </div>
  );
}

export default Sales;
