import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Analytics Card */}
        <Link href="/analytics" className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
          <div className="text-xl font-semibold mb-2 border-b-2 border-blue-500 pb-2">Analytics</div>
          <p className="text-gray-600 mt-2">
            View and analyze data trends, metrics, and key performance indicators.
          </p>
        </Link>

        {/* Visit Locations Card */}
        <Link href="/visit" className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
          <div className="text-xl font-semibold mb-2 border-b-2 border-green-500 pb-2">Visit Locations</div>
          <p className="text-gray-600 mt-2">
            Explore and manage the various locations and their details.
          </p>
        </Link>

        {/* Random Card */}
        <Link href="/random" className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
          <div className="text-xl font-semibold mb-2 border-b-2 border-gray-500 pb-2">Random Card</div>
          <p className="text-gray-600 mt-2">
            This is a randomly named card with some placeholder content.
          </p>
        </Link>
      </div>
    </div>
  );
}
