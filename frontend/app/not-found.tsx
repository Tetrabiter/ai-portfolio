import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <h1 className="text-9xl font-extrabold text-black">404</h1>
          <h2 className="mt-6 text-3xl font-bold text-black">Page not found</h2>
          <p className="mt-2 text-base text-gray-700">Sorry, we couldn't find the page you're looking for.</p>
        </div>
        <div className="mt-8">
          <div className="inline-flex rounded-md shadow">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base rounded-md text-white font-semibold bg-black hover:bg-gray-800 duration-300"
            >
              Go back home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

