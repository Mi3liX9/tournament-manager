"use client";
import React from "react";
import AddTournament from "./AddTournament";
import AddTeam from "./AddTeam";
import SelectCaptain from "./SelectCaptain";
import ApprovePlayer from "./ApprovePlayer";
import DeleteTournament from "./DeleteTournament";

function TournamentAdmin() {
  return (
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
  );
}

export default TournamentAdmin;
