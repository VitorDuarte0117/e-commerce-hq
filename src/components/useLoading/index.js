import React, { useState } from "react";
import "./styles.css";

const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false);

    const getLoading = () => {
        return (
            <div className="loader">
                <div />
                <div />
                <div />
                <div />
            </div>
        );
    };

    return {
        isLoading,
        setIsLoading,
        getLoading,
    };
};

export default useLoading;
