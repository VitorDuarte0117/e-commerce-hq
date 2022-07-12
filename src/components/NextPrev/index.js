import React from "react";
import "./styles.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function NextPrev({ lastValue, setLastValue }) {
    const eventNext = () =>
        setLastValue((prev) => (prev >= 1540 ? prev : prev + 20));

    const eventPrev = () => setLastValue((prev) => (prev <= 0 ? 0 : prev - 20));

    return (
        <div className="change-images">
            {lastValue <= 0 ? (
                <button onClick={eventPrev} aria-label="Prev" disabled>
                    <FaArrowLeft />
                </button>
            ) : (
                <button onClick={eventPrev} aria-label="Prev">
                    <FaArrowLeft />
                </button>
            )}
            {lastValue >= 1540 ? (
                <button onClick={eventNext} aria-label="Next" disabled>
                    <FaArrowRight />
                </button>
            ) : (
                <button onClick={eventNext} aria-label="Next">
                    <FaArrowRight />
                </button>
            )}
        </div>
    );
}
