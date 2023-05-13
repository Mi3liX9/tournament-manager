import { supabase } from "@/utils/supabase";
import React, { useEffect, useState } from "react";

function ApprovePlayer() {
  const [players, setPlayers] = useState<any>([]);
  const [teams, setTeams] = useState<any>([]);
  const [selectedPlayer, setSelectedPlayer] = useState();
  const [selectedTeam, setSelectedTeam] = useState();

  useEffect(() => {
    (async function () {
      const { data: players } = await supabase
        .from("Player")
        .select("*")
        .is("team_number", null);

      const { data: teams } = await supabase.from("Team").select("*");

      setPlayers(players);
      setTeams(teams);

      console.log(players);
    })();
  }, []);

  const handleApprove = async () => {
    console.log({ selectedPlayer, selectedTeam });

    if (
      typeof selectedPlayer === "undefined" ||
      typeof selectedTeam === "undefined"
    ) {
      alert("Please fill all the fields");
      return;
    }
    await supabase
      .from("Player")
      .update({"team_number":parseInt(selectedTeam)})
      .eq("id", parseInt(selectedPlayer));
    alert(`Player ${selectedPlayer} have been added to team ${selectedTeam}`);
    setSelectedPlayer(undefined);
    setSelectedTeam(undefined);

    
  };

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
            onChange={(e) => setSelectedPlayer(e.target.value as any)}
          >
            <option>Select a player</option>
            {players.map((p: any) => (
              <option value={p.id} key={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
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
            {teams.map((t: any) => (
              <option value={t.id} key={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={handleApprove}
          >
            Approve Player
          </button>
        </div>
      </form>
    </div>
  );
}

export default ApprovePlayer;
