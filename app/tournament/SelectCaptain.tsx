"use client"
import { supabase } from "@/utils/supabase";
import React from "react";
import { useEffect, useState } from "react";

interface Team {
  name:string;
  
}

interface Player {
  name:string;
}
function SelectCaptain() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState('');

  useEffect(() => {
   async function fetchTeam()  {
    let { data: Team, error } = await supabase
    .from('Team')
    .select('name')
    if (error){
      alert(error)
      return;
    }
      if(Team) {
        setTeams(Team);
      }
    }
    fetchTeam();
   
  }, [])


  async function getCurrentTeamId() {
    let { data: Team, error } = await supabase
    .from('Team')
    .select('id')
    .eq('name',selectedTeam)

    if(error)
    return

    if(Team)
      return Team[0].id;
      
}

  useEffect(() => {

    

    async function  fetchPlayers() {
      let team_id = await getCurrentTeamId();      
    let { data: Player, error } = await supabase
    .from('Player')
    .select('name')
    .eq('team_number', team_id)
      if(error)
      return
        if(Player){
          console.log(Player)
          setPlayers(Player);
        }   
    }
    fetchPlayers();

  },[selectedTeam])

   async function handleSubmit () {
    let team_id = await getCurrentTeamId(); 
    if(!team_id || !selectedPlayer) {
      alert("Please fill all fields");
      return
    }
    const { data, error } = await supabase
    .from('Team')
    .update({ 'captain': selectedPlayer })
    .eq('id', team_id)

    if(error){
      alert(error.message)
      return
    }

    alert("Added");
   

  }



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
            onChange={(e) => setSelectedTeam(e.target.value as any)}

          >
            <option>Select a team</option>
            {teams.map((teams) => (
              <option key={teams.name} value={teams.name}>
                {teams.name}
              </option>
            ))}
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
            onChange={(e) => setSelectedPlayer(e.target.value as any)}
          >
            <option>Select a captain</option>
            {players.map((players) => (
                <option key={players.name} value={players.name}>
                {players.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleSubmit}
          >
            Select Captain
          </button>
        </div>
      </form>
    </div>
  );
}

export default SelectCaptain;
