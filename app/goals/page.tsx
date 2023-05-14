"use client"
import React from 'react';

function TopScorer() {
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Top Scorer</h2>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"> Player Name scored x goals </div>
          <p className="text-gray-700 text-base">
            Highest goals scored in all tournaments
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopScorer;