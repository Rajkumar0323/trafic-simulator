import React, { useEffect, useState, useRef } from "react";
import "../App.css";
function Right({ signal }) {
  const [carLeft, setCarLeft] = useState(-20);
  const [busLeft, setBusLeft] = useState(-40);
  const [bikeLeft, setBikeLeft] = useState(-30);

  const carPos = useRef(-20);
  const busPos = useRef(-40);
  const bikePos = useRef(-30);

  useEffect(() => {
    const interval = setInterval(() => {
      // Stop if signal is red and vehicle near stop line
      const nearStop = carPos.current > 25 && carPos.current < 60;
      const isRed = signal !== "right";

      if (isRed && nearStop) {
        return; // pause movement
      }

      // Reset if gone too far
      if (carPos.current > 130) {
        carPos.current = -20;
        busPos.current = -40;
        bikePos.current = -30;
      } else {
        carPos.current += 1;
        busPos.current += 1;
        bikePos.current += 1;
      }

      setCarLeft(carPos.current);
      setBusLeft(busPos.current);
      setBikeLeft(bikePos.current);
    }, 100);

    return () => clearInterval(interval);
  }, [signal]);
  return (
    <>
      <img
        src="car-png-top-view-png-blue-car-top-view-11562875896ptd1ytjtjv.png"
        alt="Car"
        className="vehicle right-car"
        style={{ bottom: `39%`, right: `${carLeft}%` }}
      />
      <img
        src="images.jpeg"
        alt="Bike"
        className="vehicle right-car"
        style={{ bottom: "40%", right: `${bikeLeft}%` }}
      />
      <img
        src="images.png"
        alt="Bus"
        className="vehicle right-bus"
        style={{ bottom: "45%", right: `${carLeft}%` }}
      />
    </>
  );
}

export default Right;
