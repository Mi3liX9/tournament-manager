import React from "react";

function ApprovePlayer() {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="font-bold text-lg mb-4">Approve Player to Join Team</h2>
      <form className="mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="player"
          >
            Player
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="player"
          >
            <option>Select a player</option>
            <option>Player 1</option>
            <option>Player 2</option>
            <option>Player 3</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="team">
            Team
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="team"
          >
            <option>Select a team</option>
            <option>Team 1</option>
            <option>Team 2</option>
            <option>Team 3</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Approve Player
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApprovePlayer;
