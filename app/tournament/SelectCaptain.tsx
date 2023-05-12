import React from "react";

function SelectCaptain() {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="font-bold text-lg mb-4">Select Team Captain</h2>
      <form className="mb-4">
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
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="captain"
          >
            Captain
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="captain"
          >
            <option>Select a captain</option>
            <option>Player 1</option>
            <option>Player 2</option>
            <option>Player 3</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Select Captain
          </button>
        </div>
      </form>
    </div>
  );
}

export default SelectCaptain;
