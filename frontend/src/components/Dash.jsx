import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center font-sans bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white/10 backdrop-blur-2xl p-10 rounded-3xl border border-white/20 shadow-xl w-full max-w-md">
                <h1 className="text-5xl font-extrabold mb-6 text-white drop-shadow-lg">Welcome to College Dashboard</h1>
                <p className="text-lg mb-6 text-white opacity-90">Manage and explore all your college resources in one place.</p>
                <button 
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-black text-white font-semibold rounded-lg hover:scale-105 transition-transform transform"
                    onClick={() => navigate('/login')}
                >
                    Login
                </button>
            </div>
        </div>
    );
}
