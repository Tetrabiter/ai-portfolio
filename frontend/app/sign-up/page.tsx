"use client";

import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FormData } from "../types/types";

const SignUp = () => {
    const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
    const [errors, setErrors] = useState<Partial<FormData>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = (): boolean => {
        console.log(formData);
        let newErrors: Partial<FormData> = {};

        if (!formData.password.trim()) newErrors.password = "Пароль обязателен";
        if (!formData.email.trim()) {
            newErrors.email = "Email обязателен";
        } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
            newErrors.email = "Некорректный email";
        }

        console.log(newErrors);
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("handleSubmit вызван");

        if (validate()) {
            alert("Форма успешно отправлена!");
            setFormData({ password: "", email: "" }); // Очистка формы
            setErrors({});
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Sign-Up</h2>
                <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                    {/* Email */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-700">Email:</label>
                        <input
                            id="email"
                            name="email"
                            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="email"
                            onChange={handleChange}
                            placeholder="your@email.com"
                            value={formData.email}
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-lg font-semibold text-gray-700">Password:</label>
                        <input
                            id="password"
                            name="password"
                            className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            onChange={handleChange}
                            placeholder="********"
                            value={formData.password}
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                        )}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3">
                        <button
                            className="w-full p-4 rounded-md bg-black hover:bg-gray-800 duration-300 text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
                            type="submit"
                        >
                            <p className="font-semibold">Submit</p>
                        </button>
                        <button className="w-full flex justify-center p-4 rounded-md bg-black hover:bg-gray-800 duration-300 text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-300">
                            <FaGoogle />
                        </button>
                    </div>
                </form>

                <p className="mt-4 text-center">
                    Already have an account?{" "}
                    <Link href="/sign-in" className="text-blue-500 hover:text-pink-500 duration-300">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
