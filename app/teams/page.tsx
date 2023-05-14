"use client"
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

function TeamMembers() {
  const [selectedTeam, setSelectedTeam] = useState('');

  const handleTeamSelect = (team:any) => {
    setSelectedTeam(team);
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Team Members</h2>
      <div className="mb-4">
        <label className="font-bold mr-2">Select team:</label>
        <select
          className="border border-gray-400 rounded-md text-black px-4 py-2"
          value={selectedTeam}
          onChange={(e) => handleTeamSelect(e.target.value)}
        >
          <option value="">Select a team</option>
          <option value="Team A">Team A</option>
          <option value="Team B">Team B</option>
          <option value="Team C">Team C</option>
        </select>
      </div>
      {selectedTeam ? (
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Manager</th>
              <th className="px-4 py-2">Coach</th>
              <th className="px-4 py-2">Captain</th>
              <th className="px-4 py-2">Player</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Manager Name</td>
              <td className="border px-4 py-2">Coach Name</td>
              <td className="border px-4 py-2">Captain Name</td>
              <td className="border px-4 py-2">Player Name</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Manager Name</td>
              <td className="border px-4 py-2">Coach Name</td>
              <td className="border px-4 py-2">Captain Name</td>
              <td className="border px-4 py-2">Player Name</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Manager Name</td>
              <td className="border px-4 py-2">Coach Name</td>
              <td className="border px-4 py-2">Captain Name</td>
              <td className="border px-4 py-2">Player Name</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Please select a team</p>
      )}
    </div>
  );
}

export default TeamMembers;