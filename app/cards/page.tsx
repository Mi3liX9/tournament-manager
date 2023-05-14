"use client";

import { supabase } from "@/utils/supabase";
import { useEffect, useState } from "react";

export default function CardsPage() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    (async function () {
      const { data: cards } = await supabase
        .from("Card")
        .select("*, Player(*), Tournament(*)");
      setCards(cards as any);
    })();
  }, []);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="welcome-page">
          <h1>Cards</h1>
        </p>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <ul>
          {cards.map((card) => (
            <li key={`${card.player_id}${card.tournamnet_number}`}>
              <p
                className={
                  (card.color as string).toLocaleLowerCase() === "red"
                    ? `text-red-500`
                    : "text-yellow-500"
                }
              >
                Player {card.Player.name} got {card.color} card in{" "}
                {card.Tournament.name} tournament.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
