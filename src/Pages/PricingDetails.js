import React from "react";
import "../styles/pricingdetails.css";
import PricingCard from "../Components/PricingCard";

function PricingDetails() {
  const data = [
    {
      plan: "Paid",
    },
    {
      plan: "plus",
    },
    {
      plan: "pro",
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {data &&
            data.map((details, index) => (
              <div key={`pricing-details-${index}`} className="col-lg-4">
                <PricingCard data={details} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default PricingDetails;
