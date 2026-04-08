export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-6 px-10 bg-[#0a0f1a] border-b border-gray-800 sticky top-0 z-50">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">X</div>
                <span className="text-xl font-bold text-white tracking-tight">CoreX <span className="text-blue-500 text-xs uppercase tracking-widest ml-1">Systems</span></span>
            </div>
            <div className="hidden md:flex gap-10 text-gray-400 text-sm font-medium">
                <a href="#" className="hover:text-white transition-colors">Home</a>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-900/20">
                Request Demo
            </button>
        </nav>
    );
}
