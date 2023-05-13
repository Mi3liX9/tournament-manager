"use client";
import React, { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";
import AddTournament from "./AddTournament";
import AddTeam from "./AddTeam";
import SelectCaptain from "./SelectCaptain";
import ApprovePlayer from "./ApprovePlayer";
import DeleteTournament from "./DeleteTournament";
import { useRouter } from "next/navigation";

function TournamentAdmin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hydrated, setHydrated] = React.useState(false);
  const router = useRouter();


  React.useEffect(() => {
    setHydrated(true)
    async function checkAuthentication() {
      const { data } = await supabase.auth.getUser();
      if (data.user != null) {
        setAuthenticated(true);
      }
      setLoading(false);
    }
    checkAuthentication();
  }, []);

  if (!hydrated) {
    // Returns null on first render, so the client and server match
    return null;
}

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!authenticated && !loading) {
    return <div className="text-red-500 font-bold">Access Denied.</div>;
  }
  const signOut = async () => {
    
      const { error } = await supabase.auth.signOut()
      if(!error)
        router.push("/login");
    };
  

  return (
    <div >
       <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={signOut}
                >
                  Sign Out
                </button>

    <div className="container mx-auto p-4">
     
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4">
          <AddTournament />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <AddTeam />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <SelectCaptain />
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <ApprovePlayer />
        </div>
        <div className="w-full px-4">
          <DeleteTournament />
        </div>
      </div>
    </div>
    </div>
  );
}


export default TournamentAdmin;