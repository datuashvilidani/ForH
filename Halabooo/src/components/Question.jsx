import { useState } from "react";
import gif1 from "../assets/gif1.gif"
import gif2 from "../assets/gif2.gif"
import { useNavigate } from "react-router-dom";

export default function Question() {
    const navigate = useNavigate();
    const [noCount, setNoCount] = useState(0);

    const noMessages = [
        "No",
        "Are you sure?",
        "Really sure?",
        "Think again...",
        "Please Halaboo",
        "Come on Halaboo 🥺",
        "Last chance...",
        "You are breaking my heart 💔",
    ];

    const noText =
        noCount < noMessages.length
            ? noMessages[noCount]
            : noMessages[noMessages.length - 1];

    const yesScale = 1 + noCount * 0.35;

    const handleNo = () => setNoCount((c) => c + 1);

    const handleYes = () => {
        navigate("/celebration");
    };

    return (
        <div className="bg-[#E0E3ED] min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center px-6 text-center gap-6">
                <img src={gif2} alt="" />


                <h1 className="text-3xl sm:text-4xl font-bold italic">
                    will you be my valentine Halaboo?
                </h1>

                <div className="flex items-center gap-4 mt-2">
                    <button
                        onClick={handleYes}
                        className="bg-green-600 text-white font-semibold px-6 py-3 rounded-2xl transition-transform"
                        style={{ transform: `scale(${yesScale})` }}
                    >
                        Yes
                    </button>

                    <button
                        onClick={handleNo}
                        className="bg-red-600 text-white font-semibold px-6 py-3 rounded-2xl"
                    >
                        {noText}
                    </button>
                </div>

                <img src={gif1} alt="" />
            </div>
        </div>
    );
}
