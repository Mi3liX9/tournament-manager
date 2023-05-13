import { supabase } from "@/utils/supabase";

export type Tournament = {
    name: string;
  };

export async function fetchTournamentNames() {
    const { data: Tournament, error } = await supabase
      .from("Tournament")
      .select("name");

      

    if (error) {
      console.error(error);
      return;
    }

    if (Tournament) {
        return Tournament;
    }
  }