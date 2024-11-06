export default function HistorySection({ history }) {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Content History</h2>
          {history.length === 0 ? (
            <p className="text-gray-600 italic">No history available yet.</p>
          ) : (
            <ul className="space-y-4 max-h-[calc(100vh-16rem)] overflow-y-auto pr-4">
              {history.map((item, index) => (
                <li key={index} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                  <p className="text-gray-800 mb-2 line-clamp-2 hover:line-clamp-none transition-all duration-300">
                    {item.content}
                  </p>
                  <p className="text-sm text-indigo-600 font-medium">
                    {new Date(item.timestamp).toLocaleString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }