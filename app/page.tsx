"use client";
import React from "react";
import { fetchAllTeams } from "./lib/fetchUsers";
// import { redirect } from "next/dist/server/api-utils";
import { redirect } from "next/navigation";
const page = () => {
    redirect("/auth");
    return (
        <div className="grid items-center w-full h-full">
            <button
                className="py-4 px-10  text-md font-bold bg-black text-white"
                onClick={() => fetchAllTeams()}
            >
                Teams
            </button>
        </div>
    );
};

export default page;
