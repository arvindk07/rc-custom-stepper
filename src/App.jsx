import React from "react";
import CheckoutStepper from "./components/CheckoutStepper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact Details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Provide your contact Details.</div>,
  },
  {
    name: "Payment",
    Component: () => <div>Provide your contact Details.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Provide your contact Details.</div>,
  },
];

const App = () => {
  return (
    <div>
      <CheckoutStepper stepConfig={CHECKOUT_STEPS} />
    </div>
  );
};

export default App;
