import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Welcome to React + Tailwind v4.0 + Vite
        </h1>
        <p className="text-gray-600">
          This is a starter template with Tailwind CSS v4.0 styling.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;