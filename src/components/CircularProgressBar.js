import React from 'react'

const CircularProgressBar = ({ progress }) => {
    const circleStyle = {
        strokeWidth: "10",
        fill: "none",
        transform: "rotate(-90deg)",
        transformOrigin: "50% 50%",
        strokeLinecap: "round"
    };

    const progressTextStyle = {
        dominantBaseline: "middle",
        textAnchor: "middle",
        fontSize: "1rem",
        fontWeight: "bold",
        fill: "#edff85",
    };

    const textStyle = {
        dominantBaseline: "middle",
        textAnchor: "middle",
        fontSize: "1rem",
        fontWeight: "bold",
        fill: "#fff",
    };

    const circumference = 2 * Math.PI * 45;
    const dashOffset = ((100 - ((progress / 7) * 100)) / 100) * circumference;

    return (
        <div style={{ width: "80px", height: "80px" }}>
            <svg width="100%" height="100%" viewBox="0 0 100 100">
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    style={{ ...circleStyle, stroke: "#37433f" }}
                />
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    style={{ ...circleStyle, stroke: "#edff85", strokeDasharray: circumference, strokeDashoffset: dashOffset }}
                />
                <text x="50" y="40" style={progressTextStyle}>{progress}/7</text>
                <text x="50" y="60" style={textStyle}>Streak</text>
            </svg>
        </div>
    )
}

export default CircularProgressBar