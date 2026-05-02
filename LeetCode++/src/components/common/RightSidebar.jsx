import React from 'react';

const RightSidebar = () => {
  return (
    <div className="w-96 my-6 rounded-2xl border border-slate-700 bg-[#0f172a]  p-6 space-y-6 overflow-auto">
      
      {/* Interview Crash Course */}
      <div className="bg-gradient-to-br from-violet-600 to-purple-600 rounded-3xl p-6 text-white">
        <h3 className="text-xl font-semibold">LeetCode's Interview<br />Crash Course:</h3>
        <p className="mt-1">Data Structures and Algorithms</p>
        <button className="mt-6 bg-white text-black px-6 py-2.5 rounded-2xl font-semibold hover:bg-orange-400 hover:text-white transition">
          Start Learning
        </button>
      </div>

      {/* LeetCode Contest */}
      <div className="bg-[#1e2937] border border-slate-700 rounded-3xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-lg">LeetCode Contest</h4>
            <p className="text-slate-400 text-sm mt-1">Participate and win prizes.</p>
          </div>
          <div className="text-5xl">🏆</div>
        </div>
        <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-2xl font-semibold">
          Join Contest
        </button>
      </div>

      {/* Discuss Now */}
      <div className="bg-[#1e2937] border border-slate-700 rounded-3xl p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-3xl">💬</div>
          <div>
            <h4 className="font-semibold">Discuss Now</h4>
            <p className="text-sm text-slate-400">Share interview questions. Get solutions.</p>
          </div>
        </div>
        <button className="mt-6 w-full border border-slate-600 hover:bg-slate-800 py-3 rounded-2xl font-medium">
          Let's Discuss
        </button>
      </div>

      {/* Shop with LeetCoins */}
      <div className="bg-[#1e2937] border border-slate-700 rounded-3xl p-6">
        <div className="flex items-center gap-4">
          <div className="text-6xl">🪙</div>
          <div>
            <h4 className="font-semibold">Shop with LeetCoins</h4>
            <p className="text-sm text-slate-400">Use your points in our LeetCode Store.</p>
          </div>
        </div>
        <button className="mt-6 w-full bg-yellow-500 text-black py-3 rounded-2xl font-semibold hover:bg-yellow-400">
          Redeem
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;