"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Auth = () => {
    const router = useRouter();
    return (
        <div className="grid place-items-center relative z-20">
            <h1 className="font-bold text-5xl text-blue-900">Assign Me Now</h1>
            <p className="py-8  text-white text-xl font-bold">
                make your job easy
            </p>
            <button
                type="button"
                onClick={() => router.push("/auth/register")}
                className="w-max-content py-3 px-28 mt-3 rounded-full  bg-blue-400/50 text-white font-bold text-md cursor-pointer shadow-md shadow-slate-700/40 hover:opacity-90"
            >
                Sign up
            </button>
            <button className="w-max-content py-3 px-28 mb-20 mt-4 rounded-full bg-blue-800/60 text-white font-bold text-md cursor-pointer  shadow-md shadow-slate-700/40   hover:opacity-90                                                                                                                ">
                Log In
            </button>
        </div>
    );
};

export default Auth;
