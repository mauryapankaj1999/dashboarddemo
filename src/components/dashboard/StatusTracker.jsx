import React from "react";
import CardHeading from "../../reusablecomponents/CardHeading";
import { ChartArea, ChevronRight, CircleUserRound, Timer } from "lucide-react";

export default function StatusTracker() {
  const awayList = [
    {
      id: 1,
      name: "Sophia Williams",
      role: "Horizon Shift",
      avatar: "/avatars/sophia.png",
      time: "25m",
      emoji: "☕",
    },
    {
      id: 2,
      name: "Arthur Gauthier",
      role: "Google UX Course",
      avatar: "/avatars/arthur.png",
      time: "12m",
      emoji: "🍔",
    },
    {
      id: 3,
      name: "Emma Wright",
      role: "Phoenix",
      avatar: "/avatars/emma.png",
      time: "8m",
      emoji: "🍎",
    },
  ];
  return (
    <>
      <CardHeading
        title="Status Tracker"
        icon={<ChartArea size={16} />}
        actionText="See All"
        actionIcon={<ChevronRight size={14} />}
      />

      <div className="statustracker">
        <ul>
          {awayList.map((el) => {
            return (
              <li>
                <div className="avtarimg">
                  <CircleUserRound />

                  <div className="">
                    <h4>Sophia Williams</h4>
                    <h6>Horizon Shift</h6>
                  </div>
                </div>
                <div>
                  <div className="numberstat25">25 M</div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
     
    </>
  );
}
