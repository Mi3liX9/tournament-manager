"use client";
import { supabase } from "@/utils/supabase";
import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

function TeamMembers() {
  const [teams, setTeams] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState({});
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    (async function () {
      const { data: teams } = await supabase.from("Team").select("*");
      setTeams(teams as any);
    })();
  }, []);
  const handleTeamSelect = async (team_id: any) => {
    setSelectedTeam(teams.find((t: any) => t.id === parseInt(team_id))!);
    const { data: players } = await supabase
      .from("Player")
      .select("*")
      .eq("team_id", selectedTeam.id);
    setPlayers(players);
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
          {teams.map((team) => (
            <option value={team.id} key={team.id}>
              {team.name}
            </option>
          ))}
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
            {(players || []).map((player: any) => (
              <tr key={player.id}>
                <td className="border px-4 py-2">{selectedTeam.manager}</td>
                <td className="border px-4 py-2">{selectedTeam.coach}</td>
                <td className="border px-4 py-2">{selectedTeam.captin}</td>
                <td className="border px-4 py-2">{player.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Please select a team</p>
      )}
    </div>
  );
}

export default TeamMembers;
