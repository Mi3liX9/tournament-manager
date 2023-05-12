import React from "react";

function AddTeam() {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="font-bold text-lg mb-4">Add Team to Tournament</h2>
      <form className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Team Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter team name"
          />


<label className="block text-gray-700 font-bold mb-2" htmlFor="address">
            Team Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="address"
            type="text"
            placeholder="Enter team address"
          />


<label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Team Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="email"
            placeholder="Enter team email"
          />

<label className="block text-gray-700 font-bold mb-2" htmlFor="website">
            Team Website
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="website"
            type="text"
            placeholder="Enter team website"
          />

<label className="block text-gray-700 font-bold mb-2" htmlFor="coach">
            Team Coach
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="coach"
            type="text"
            placeholder="Enter team coach"
          />


<label className="block text-gray-700 font-bold mb-2" htmlFor="manager">
            Team Manager
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="manager"
            type="text"
            placeholder="Enter team manager"
          />
          
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="tournament"
          >
            Tournament
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="tournament"
          >
            <option>Select a tournament</option>
            <option>Tournament 1</option>
            <option>Tournament 2</option>
            <option>Tournament 3</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Add Team
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTeam;
