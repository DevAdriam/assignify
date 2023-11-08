"use client";
import { registerUser } from "@/app/lib/fetchUsers";
import axios from "axios";
import React, { useState } from "react";
import { useMutation } from "react-query";
import { ZodError, object, string } from "zod";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const [password, setPassword] = useState("");

    const registerSchema = object({
        name: string(),
        email: string().email(),
        password: string().min(6),
    });
    const mutation = useMutation((newUser) => {
        return axios.post("http://localhost:3100/auth/register", newUser);
    });

    return (
        <form className="w-[700px] h-[500px]  flex items-center  justify-items-center flex-col gap-5 mt-10 relative z-30">
            <h1 className="font-bold text-5xl text-blue-900">Sign Up</h1>

            <div className="w-[50%] flex items-start justify-items-start flex-col text-start mt-10">
                <input
                    type="text"
                    value={name}
                    required
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your username"
                    className="w-full h-10 border px-5  bg-slate-100/90 rounded-full outline-none border-none focus:shadow-md focus:shadow-slate-400"
                />
                {formErrors.name && (
                    <p className="text-red-500 mx-4">{formErrors.name}</p>
                )}
            </div>
            <div className="w-[50%] flex items-start justify-items-start flex-col text-start ">
                <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full h-10 border px-5  bg-slate-100/90 rounded-full outline-none border-none focus:shadow-md focus:shadow-slate-400"
                />
                {formErrors.email && (
                    <p className="text-red-500 mx-4">{formErrors.email}</p>
                )}
            </div>

            <div className="w-[50%] flex items-start justify-items-start flex-col text-start ">
                <input
                    type="password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full h-10 border px-5  bg-slate-100/90 rounded-full outline-none border-none focus:shadow-md focus:shadow-slate-400"
                />
                {formErrors.password && (
                    <p className="text-red-500 mx-4">{formErrors.password}</p>
                )}
            </div>

            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();

                    try {
                        setIsLoading(true);
                        const validatedData = registerSchema.parse({
                            email,
                            password,
                            name,
                        });
                        console.log(isLoading);
                        mutation.mutate(validatedData);

                        setFormErrors({});
                        setIsLoading(false);
                    } catch (err: any) {
                        console.error(err);

                        if (err instanceof ZodError) {
                            // Handle validation errors
                            setFormErrors(err.formErrors.fieldErrors);
                            console.log(formErrors);
                        }
                        setIsLoading(false);
                    } finally {
                    }

                    // setName("");
                    // setEmail("");
                    // setPassword("");
                    // setPhone("");
                }}
                className="w-max-content py-3 px-28 mt-3 rounded-full  bg-blue-800/70 text-white font-bold text-md cursor-pointer shadow-md shadow-slate-700/40 hover:opacity-90"
            >
                {isLoading ? "loading" : "Sign up"}
            </button>
        </form>
    );
};

export default Register;
