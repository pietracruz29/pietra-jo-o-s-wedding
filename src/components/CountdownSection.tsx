import { useState, useEffect } from "react";

const WEDDING_DATE = new Date("2026-07-25T15:00:00-03:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft());

  function calcTimeLeft(): TimeLeft {
    const diff = Math.max(0, WEDDING_DATE - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: timeLeft.days, label: "dias" },
    { value: timeLeft.hours, label: "horas" },
    { value: timeLeft.minutes, label: "min" },
    { value: timeLeft.seconds, label: "seg" },
  ];

  return (
    <div className="flex justify-center gap-6 md:gap-10 py-6">
      {units.map((u) => (
        <div key={u.label} className="text-center">
          <span
            className="block text-3xl md:text-5xl font-light text-primary"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownSection;
