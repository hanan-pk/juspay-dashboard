import React from "react";
import "./ProjectionChart.css";

const ProjectionChart = () => {
  return (
    <div className="projections-chart">
      <h3>Projections vs Actuals</h3>
      <div className="chart-container">
        <div className="chart-y-axis">
          <span>30M</span>
          <span>20M</span>
          <span>10M</span>
          <span>0</span>
        </div>
        <div className="chart-area">
          <div className="chart-grid">
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line"></div>
            <div className="grid-line bottom"></div>
          </div>
          <div className="chart-bars">
            <div className="bar-group">
              <div className="bar" style={{ height: "90px" }}></div>
            </div>
            <div className="bar-group">
              <div className="bar" style={{ height: "110px" }}></div>
            </div>
            <div className="bar-group">
              <div className="bar" style={{ height: "95px" }}></div>
            </div>
            <div className="bar-group">
              <div className="bar" style={{ height: "120px" }}></div>
            </div>
            <div className="bar-group">
              <div className="bar" style={{ height: "80px" }}></div>
            </div>
            <div className="bar-group">
              <div className="bar" style={{ height: "110px" }}></div>
            </div>
          </div>
          <div className="chart-x-axis">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectionChart;
