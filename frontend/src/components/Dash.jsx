import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 px-4">
            <div className="bg-white/20 backdrop-blur-lg p-10 rounded-2xl border border-white/30 shadow-2xl w-full max-w-xl text-center">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white drop-shadow-xl">
                    🎓 College Dashboard
                </h1>
                <p className="text-lg text-white/90 mb-8">
                    Everything you need to manage your college in one place.
                </p>
                <button
                    onClick={() => navigate('/login')}
                    className="bg-gradient-to-r from-black to-purple-700 hover:from-purple-800 hover:to-black px-8 py-3 text-lg text-white font-semibold rounded-xl transition-transform hover:scale-105 shadow-lg"
                >
                    Go to Login
                </button>
            </div>
        </div>
    );
}
