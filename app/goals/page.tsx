"use client";
import { supabase } from '@/utils/supabase';
import React, { useState, useEffect } from 'react';

interface Goal {
  player_id: number;
}

interface Player {
  id: number;
  name: string;
}
function goalsPage(){

  const [topScorer, setTopScorer] = useState('');
  const [topScoreName, setTopScoreName] = useState(0);
  const [loading, setLoading] = useState(true);
     
      async function getPlayerName(id: number) {
        const { data: player, error } = await supabase
          .from('Player')
          .select('name')
          .eq('player_id', id)
          .single();

        if (error || !player) {
          console.log(error);
          return '';
        }

        return player.name;
      }

      async function getPlayerAppearanceCounts(){
        const { data:Goal, error } = await supabase
          .from('Goal')
          .select('player_id', {count: 'exact'})
          

        if (error) {
          console.log(error);
        }
        if(Goal) {
          let x = await getPlayerName(Goal[0].player_id)
          setTopScorer(x)
        }
      }

      useEffect(() => {
          getPlayerAppearanceCounts();
        setLoading(false);
      },[])

      


      return (
        <div className="container mx-auto my-8">
          <h2 className="text-2xl font-bold mb-4">Top Scorer</h2>
          {!loading ? (
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {topScorer}
                </div>
                <p className="text-blue-500 text-base">Highest goals scored in all tournaments</p>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
      );
    
          }

export default goalsPage;