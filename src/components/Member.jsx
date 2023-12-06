import React from "react";
import {
  person_1,
  person_2,
  person_3,
  person_4,
  person_5,
  person_6,
} from "../assets";
function Member({ member }) {
  const team_members_img = [
    {
      id: "CD1",
      photo: person_3,
    },
    {
      id: "CD2",
      photo: person_2,
    },
    {
      id: "CD3",
      photo: person_1,
    },
    {
      id: "CD4",
      photo: person_4,
    },
    {
      id: "CD5",
      photo: person_5,
    },
    {
      id: "CD6",
      photo: person_6,
    },
  ];

  const person_img = team_members_img.filter((tm) => tm.id === member.id);
  return (
    <div className="w-full max-h-[85vh] bg-[#f6f6f6] shadow_active max-sm:max-h-[65vh]">
      <div className="w-full h-[78%] max-sm:max-h-[78%]">
        <img
          src={person_img[0].photo}
          className="block mx-auto w-full h-full"
        />
      </div>
      <div className="bg-white py-6 text-center">
        <h2 className="text-2xl">{member.name}</h2>
        <p className=" text-lg font-medium text-[#777]"> {member.role}</p>
      </div>
    </div>
  );
}

export default Member;
