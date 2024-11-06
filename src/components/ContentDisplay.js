export default function ContentDisplay({ content, loading }) {
    return (
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-4">Generated Content</h2>
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-700"></div>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 sm:p-6 shadow-inner">
              <p className="text-lg text-gray-800 leading-relaxed">
                {content || "Click 'Generate New Content' to create AI-generated text."}
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }