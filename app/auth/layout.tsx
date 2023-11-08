import React from "react";

const Auth = ({ children }) => {
    return (
        <div className="max-w-screen min-w-full min-h-[100vh] bg-blue-300 grid place-items-center relative z-10">
            <div>{children}</div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 320"
                className="absolute bottom-0  z-20"
            >
                <path
                    fill="#0099ff"
                    fillOpacity="1"
                    d="M0,192L60,176C120,160,240,128,360,112C480,96,600,96,720,117.3C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
};

export default Auth;
