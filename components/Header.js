import Link from 'next/link';

export default function Header() {
  return (
    <>
      {/* Main Header */}
      <header className="bg-blue-950 p-6 text-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo or Foundation Name */}
          <div className="text-2xl font-medium font-serif px-6">
            <Link href="/" className="text-white">
              Rohini Foundation
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 absolute right-6">
            <button className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Secondary Header */}
      <div className="bg-gray-300 p-2 text-gray-700 text-xl">
        <div className="container mx-auto flex justify-center">
          <nav className="flex space-x-8">
            <Link href="/" className="relative group">
              <span className="px-4 py-2 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
                Home
              </span>
            </Link>

            <Link href="/volunteers" className="relative group">
              <span className="px-4 py-2 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
                Volunteers
              </span>
            </Link>

            <Link href="/contact" className="relative group">
              <span className="px-4 py-2 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
                Contact Us
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
