"use client";
import { useEffect, useState } from "react";

export default function Timer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    jours: 0,
    heures: 0,
    minutes: 0,
    secondes: 0,
  });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance <= 0) {
        setExpired(true);
        setTimeLeft({ jours: 0, heures: 0, minutes: 0, secondes: 0 });
        return;
      }

      const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
      const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const secondes = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ jours, heures, minutes, secondes });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const format = (val) => String(val).padStart(2, "0");

  return (
    <div className="text-center my-6">

      {expired ? (
        <p className="text-green-600 font-semibold text-xl">
          L’événement a déjà commencé !
        </p>
      ) : (
        <p className="text-xl font-semibold text-red-600">
          {format(timeLeft.jours)} Jours {format(timeLeft.heures)} h {format(timeLeft.minutes)} min {format(timeLeft.secondes)} sec
        </p>
      )}
    </div>
  );
}