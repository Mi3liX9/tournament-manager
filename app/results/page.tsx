"use client"
import React, { useEffect, useState } from 'react';
import { Tournament, fetchTournamentNames } from '../admin/fetchTournamnet_name';
import { supabase } from '@/utils/supabase';

function MatchResults() {
  const [selectedTournament, setSelectedTournament] = useState('');
  const [tournamentNames, setTournamentNames] = useState<Tournament[]>([]);
  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
    fetchTournamentNames().then((tournaments) => {
      if (tournaments != undefined) setTournamentNames(tournaments);
    });
  }, []);

 

  async function getCurrentTournamnetId() {
    let { data: Tournament, error } = await supabase
      .from('Tournament')
      .select('id')
      .eq('name', selectedTournament);


    if (Tournament) return Tournament[0]?.id;
  }
  

  const handleTournamentSelect = async (tournament: Tournament) => {
    let tourId = await getCurrentTournamnetId();

    let { data: Match, error } = await supabase
      .from('Match')
      .select('*')
      .eq('tournament_id', tourId);

    if (error) console.log(error);
    if (Match) {
      setMatches(Match);
    }


  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Match Results</h2>
      <div className="flex justify-between mb-4">
        {tournamentNames.map((tournament) => (
          <button
            key={tournament.name}
            value={tournament.name}
            onClick={() => {
              setSelectedTournament(tournament.name);
              handleTournamentSelect(tournament)}}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            {tournament.name}
          </button>
        ))}
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
            {matches.map((match) => (
              <tr key={match.id}>
                <td className="border px-4 py-2">{match.date}</td>
                <td className="border px-4 py-2">
                  {(match.team_1_name)} vs {(match.team_2_name)}
                </td>
                <td className="border px-4 py-2">{match.winner}</td>
                <td className="border px-4 py-2">{match.match_score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Please select a tournament</p>
      )}
    </div>
  );
}

export default MatchResults;