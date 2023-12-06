import React from "react";
import HeroBanner from "../components/HeroBanner";
import Member from "../components/member";
import BookBanner from "../components/BookBanner";
import { useSelector } from "react-redux";

function Team() {
  const team_members = useSelector((state) => state.team).team;

  return (
    <div>
      <HeroBanner />
      <div className="w-[90%] block mx-auto max-lg:w-full">
        <div className="grid grid-cols-3 gap-10 px-14 py-14 max-lg:grid-cols-2 max-md:grid-cols-1 max-sm:px-5">
          {team_members.map((team) => (
            <div key={team.id}>
              <Member member={team} />
            </div>
          ))}
        </div>
      </div>
      <BookBanner />
    </div>
  );
}

export default Team;
