export default function RefreshContentButton({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-md hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105"
      >
        Generate New Content
      </button>
    )
  }