import "./Plans.css";
import { plansData } from "../../data/plansData";
import React from "react";
import whiteTick from "../../assets/whiteTick.png";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plans-blurs1"></div>
      <div className="blur plans-blurs2"></div>
      <div className="plans-headers">
        <span className="stroke-text">ready to start</span>
        <span>your journey</span>
        <span className="stroke-text">now withus</span>
      </div>

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((features, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{features}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See more benefits -&gt;</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
