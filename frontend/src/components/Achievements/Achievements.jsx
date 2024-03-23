import React from "react";
import AchievementCard from "./AchievementCard";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      name: "Alumini Friends",
      description:
        "Agriculture Student From Lovely Professional University Bags A Rs. 1 Crore Package",

      imageSrc:
        "https://images.unsplash.com/photo-1504600770771-fb03a6961d33?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3F1YXJlfGVufDB8fDB8fHww",
      imageAlt: "Alumini",
    },
    {
      id: 2,
      name: "Alumini Friends",
      description:
        "LPU B.Tech. CSE student Mayank Bist has been placed at a grand package of Rs. 50.53 Lakhs.",

      imageSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFByb2plY3R8ZW58MHx8MHx8fDA%3D",
      imageAlt: "Alumini",
    },
    {
      id: 3,
      name: "Alumini Friends",
      description:
        "LPU B.Tech. CSE student Tanya Arora has been placed at a grand package of Rs. 42 Lakhs.",

      imageSrc:
        "https://qph.cf2.quoracdn.net/main-qimg-3010f7c667aee922e00e1f10a141859e-lq",
      imageAlt: "Alumini",
    },
    {
      id: 4,
      name: "Alumini Friends",
      description:
        "LPU student Neeraj Chopra made historic win at World Athletics Championships-2022 in U.S.",

      imageSrc:
        "https://media.istockphoto.com/id/855256042/photo/engineers-of-wind-turbine.webp?b=1&s=170667a&w=0&k=20&c=7k4p_03udn5SDWUtdk9Kyv5PrL6umEPZWKHKh_K8lvg=",
      imageAlt: "Alumini",
    },
    {
      id: 5,
      name: "Alumini Friends",
      description:
        "AUtkarsh, a wireless system engineer working with Google, California, and Neha, a software engineer with Yahoo also express their gratitude towards LPU in shaping the careers of their dreams.",

      imageSrc:
        "https://media.istockphoto.com/id/1903901827/photo/view-of-compasses-pencil-drawing-background.webp?b=1&s=170667a&w=0&k=20&c=c494W9u5NOKJXGjd62FfToi7a2XG6cqva12QIV8TrC0=",
      imageAlt: "Alumini",
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="">
          <h1 className=" text-7xl text-black font-[900] text-center pb-10">Achievements</h1>{" "}
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {achievements.map((achievement) => (
            <AchievementCard achievement={achievement} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
