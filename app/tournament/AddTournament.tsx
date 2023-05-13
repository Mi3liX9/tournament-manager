'use client';
import { useState } from 'react';
import { supabase } from '@/utils/supabase';

function AddTournament() {
  const [name, setName] = useState('');
  const [start_date, setStart_date] = useState(null);
  const [end_date, setEnd_date] = useState(null);

  const handleSubmit = async () => {
    if (!name || !start_date || !end_date) {
      alert('Please fill all fields');
      return;
    }

    try {
      const { data, error } = await supabase.from('Tournament').insert([
        {
          name,
          start_date,
          end_date,
        },
      ]);

      if (error) {
        console.log(error);
        alert('Failed to add tournament. Please try again later.');
        return;
      }

      alert('Tournament added successfully!');
      setName('');
      setStart_date(null);
      setEnd_date(null);
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="font-bold text-lg mb-4">Add New Tournament</h2>
      <form className="mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="name"
          >
            Tournament Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter tournament name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="start-date"
          >
            Tournament Start Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="start-date"
            type="date"
            value={start_date ? start_date.toISOString().substr(0, 10) : ''}
            onChange={(e) => setStart_date(e.target.value ? new Date(e.target.value) : null)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="end-date"
          >
            Tournament End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="end-date"
            type="date"
            value={end_date ? end_date.toISOString().substr(0, 10) : ''}
            onChange={(e) => setEnd_date(e.target.value ? new Date(e.target.value) : null)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Add Tournament
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTournament;