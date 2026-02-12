import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import box from "../assets/box-removebg-preview.png";

export default function Boxes() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const wrongMessages = [
    "Not this one Halaboo, guess again",
    "You got wrong one Halaboo, guess again",
    "La2 Halaboo, guess again",
    "Nope not this one :))",
  ];

  const correctIndex = useMemo(() => Math.floor(Math.random() * 7), []);
  const spots = useMemo(
    () => [
      { top: "10vh", left: "8vw" },
      { top: "18vh", left: "65vw" },
      { top: "42vh", left: "12vw" },
      { top: "50vh", left: "72vw" },
      { top: "70vh", left: "20vw" },
      { top: "78vh", left: "60vw" },
      { top: "30vh", left: "40vw" },
    ],
    []
  );

  const onClickBox = (i) => {
    if (i === correctIndex) {
      navigate("/question");
    } else {
      const random =
        wrongMessages[Math.floor(Math.random() * wrongMessages.length)];
      setMessage(random);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#FDF7E5] overflow-hidden">
      <div className="flex flex-col items-center pt-6">
        <button className="text-xl font-semibold italic px-3 py-3 border border-green-500 rounded-3xl bg-green-600 transition">
          Can you guess which one is correct gift?
        </button>

        {message && (
          <p className="mt-4 text-green-600 font-semibold text-lg">
            {message}
          </p>
        )}
      </div>

      {spots.map((pos, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onClickBox(i)}
          className="absolute"
          style={pos}
        >
          <img
            src={box}
            alt="box"
            className="animate-bounce mt-15 w-28 sm:w-40 md:w-44"
          />
        </button>
      ))}
    </div>
  );
}

