"use client";
import { supabase } from "@/utils/supabase";
import React, { useEffect, useState } from "react";
import "tailwindcss/tailwind.css";

function TeamMembers() {
  const [teams, setTeams] = useState<any[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<any>({});
  const [players, setPlayers] = useState<any[]>([]);
  useEffect(() => {
    (async function () {
      const { data: teams } = await supabase.from("Team").select("*");
      setTeams(teams as any);
    })();
  }, []);
  const handleTeamSelect = async (team_id: string) => {
    setSelectedTeam(teams.find((t: any) => t.id === parseInt(team_id))!);
    const { data: players } = await supabase
      .from("Player")
      .select("*")
      .eq("team_number", parseInt(team_id));
    setPlayers((players as []) || []);
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
        <h2 className="text-xl">Selected Team: {selectedTeam.name}</h2>
      ) : null}

      {selectedTeam ? (
        <table className="table-auto">
          <thead>
            <tr>
            <th className="px-4 py-2">Players</th>
              <th className="px-4 py-2">Manager: {selectedTeam.manager}</th>
              <th className="px-4 py-2">Coach: {selectedTeam.coach}</th>
              <th className="px-4 py-2">Captain: {selectedTeam.captin}</th>
              
            </tr>
          </thead>
          <tbody>
            {(players || []).map((player: any) => (
              <tr key={player.id}>
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
