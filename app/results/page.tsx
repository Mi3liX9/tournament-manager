"use client"
import React, { useState } from 'react';

function MatchResults() {
  const [selectedTournament, setSelectedTournament] = useState('');

  const handleTournamentSelect = (tournament:any) => {
    setSelectedTournament(tournament);
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Match Results</h2>
      <div className="flex justify-between mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => handleTournamentSelect('Tournament A')}
        >
          Tournament A
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => handleTournamentSelect('Tournament B')}
        >
          Tournament B
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => handleTournamentSelect('Tournament C')}
        >
          Tournament C
        </button>
      </div>
      {selectedTournament ? (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Match</th>
              <th className="px-4 py-2">Winner</th>
              <th className="px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {/* map through all match results of the selected tournament and display them */}
          </tbody>
        </table>
      ) : (
        <p>Please select a tournament</p>
      )}
    </div>
  );
}

export default MatchResults;