import React from 'react';

const ContestBanner = () => {
  return (
    <div className="mx-6 mt-6 bg-[#1e2937] border border-slate-700 rounded-2xl p-5 flex items-center gap-4">
      <div className="text-4xl">🏆</div>
      <div className="flex-1">
        <p className="text-orange-400 text-sm font-medium">in 2 days</p>
        <p className="text-lg font-semibold">Join our next Contest <span className="text-orange-400">Weekly Contest 500</span></p>
      </div>
      <button className="bg-white hover:bg-orange-400 hover:text-white text-black px-6 py-2.5 rounded-xl font-semibold transition">
        Join Now
      </button>
    </div>
  );
};

export default ContestBanner;