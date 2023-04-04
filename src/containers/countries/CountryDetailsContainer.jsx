import React from "react";
import DetailCard from "../../components/detailCard/DetailCard";
import styles from "./CountryDetailsContainer.scss";

const CountryDetailsContainer = ({ country }) => {
  return (
    <div className="country-details-container">
      <div className="container-header" styles={styles}>
        <div>Go back</div>
        <div className="country-summary" styles={styles}>
          <div className="country-title">
            <h3>Country</h3>
          </div>
          <div className="quick-info" styles={styles}>
            Quick Info
          </div>
        </div>
      </div>
      <div className="card-container" styles={styles}>
        <DetailCard />
        <DetailCard />
        <DetailCard />
      </div>
      <div className="container-footer">
        <button>Partners</button>
      </div>
    </div>
  );
};
export default CountryDetailsContainer;
