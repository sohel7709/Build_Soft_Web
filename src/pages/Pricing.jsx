import { pricingPlans } from "../data";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

const Pricing = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/", { state: { scrollToContact: true } });
  };

  return (
    <section className="page-container">
      <div className="container">
        <h2>Our Pricing</h2>
        <div className="pricing-wrapper">
          {pricingPlans.map((plan, index) => (
            <div
              className={`pricing-plan ${plan.popular ? "popular" : ""}`}
              key={index}
            >
              {plan.popular && <div className="popular-badge">Popular</div>}
              <h3>{plan.title}</h3>
              <div className="price">
                {plan.price}
                <span>{plan.period}</span>
              </div>
              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <button
                className="btn primary"
                onClick={
                  plan.title === "Custom Software"
                    ? handleContactClick
                    : () => {}
                }
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
