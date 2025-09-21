import MetricCards from "../MetricCards/MetricCards";
import ProjectionChart from "../ProjectionChart/ProjectionChart";
import "./MainContent.css";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="page-title">
        <h1>eCommerce</h1>
      </div>

      <div className="content-grid">
        <div className="metrics-section">
          <MetricCards />
        </div>

        <div className="projections-section">
          <ProjectionChart />
        </div>

        {/* <div className="revenue-section">
          <RevenueChart />
        </div> */}

        {/* <div className="location-section">
          <LocationChart />
        </div> */}

        {/* <div className="products-section">
          <ProductsTable />
        </div> */}

        {/* <div className="sales-section">
          <SalesChart />
        </div> */}
      </div>
    </main>
  );
};

export default MainContent;
