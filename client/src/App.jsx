function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">

      {/* Header */}
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">
        Dashboard
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* Card 1 */}
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">📄 Uploaded Files</h2>
          <p className="text-3xl font-bold text-indigo-400">3</p>
        </div>

        {/* Card 2 */}
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🧠 Last Score</h2>
          <p className="text-3xl font-bold text-green-400">80%</p>
        </div>

        {/* Card 3 */}
        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">⚠️ Weak Topics</h2>
          <p className="text-sm text-gray-300">
            Server Setup, Client-Server Interaction
          </p>
        </div>

      </div>

      {/* Actions */}
      <div className="mt-10 flex gap-4">
        <button className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-semibold">
          Upload PDF
        </button>

        <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold">
          Generate Study Plan
        </button>
      </div>

    </div>
  );
}

export default App;