import React from "react";
import "./MetricCards.css";

const MetricCards = () => {
  return (
    <div className="metric-cards">
      <div className="metric-card customers">
        <div className="metric-content">
          <h3>Customers</h3>
          <div className="metric-value">
            <span className="value">3,781</span>
            <div className="metric-change positive">
              <span>+11.01%</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 10L8 6L12 10"
                  stroke="#1C1C1C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="metric-card orders">
        <div className="metric-content">
          <h3>Orders</h3>
          <div className="metric-value">
            <span className="value">1,219</span>
            <div className="metric-change negative">
              <span>-0.03%</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 6L8 10L4 6"
                  stroke="#1C1C1C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="metric-card revenue">
        <div className="metric-content">
          <h3>Revenue</h3>
          <div className="metric-value">
            <span className="value">$695</span>
            <div className="metric-change positive">
              <span>+15.03%</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 10L8 6L12 10"
                  stroke="#1C1C1C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="metric-card growth">
        <div className="metric-content">
          <h3>Growth</h3>
          <div className="metric-value">
            <span className="value">30.1%</span>
            <div className="metric-change positive">
              <span>+6.08%</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 10L8 6L12 10"
                  stroke="#1C1C1C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetricCards;
