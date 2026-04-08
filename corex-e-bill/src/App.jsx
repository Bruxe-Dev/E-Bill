import Navbar from './navbar';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white selection:bg-blue-500/30">
      <Navbar />

      {/* HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase">Next-Gen Robotics Prototype</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
            INTELLIGENT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
              E-BILLING.
            </span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mb-12 leading-relaxed">
            Revolutionizing retail with computer vision. Our automated billing box identifies
            products instantly, calculates totals, and generates bills—no barcodes required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-full font-bold text-lg transition-all">
              Watch Demo
            </button>
            <button className="bg-gray-900 border border-gray-800 hover:border-gray-600 px-10 py-4 rounded-full font-bold text-lg transition-all">
              View Specs
            </button>
          </div>
        </div>

        {/* MOCKUP PREVIEW (The "Box") */}
        <div className="mt-24 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-20"></div>
          <div className="relative bg-[#111827] border border-gray-800 rounded-2xl p-4 aspect-video flex items-center justify-center overflow-hidden">
            <div className="text-gray-700 font-mono text-sm">[ CAMERA FEED INITIALIZING... ]</div>
            {/* You will eventually replace this with your Demo Video */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
