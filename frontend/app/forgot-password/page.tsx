const ForgotPassword = () => {
    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
                    <form className="flex flex-col space-y-4" action="">

                        <div>
                            <label className="block text-lg font-medium text-gray-700">Email:</label>
                            <input
                                id="email"
                                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="email"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <button
                                className="w-full p-4 rounded-md bg-black hover:bg-gray-800 duration-300 text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-300"
                                type="submit">
                                <p className="font-semibold">Submit</p>
                            </button>
                        </div>
                    </form>

                    <p className="mt-4 text-center">Have you remembered your password? <br /> <a href="/sign-in" className="text-blue-500 hover:text-pink-500 duration-300">Log in</a></p>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;