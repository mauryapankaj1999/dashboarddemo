import React, { useState } from "react";

const tabsData = [
  { id: "meetings", label: "Meetings", active: true },
  { id: "events", label: "Events", active: false },
  { id: "holidays", label: "Holidays", active: false },
];

const meetingsData = [
  {
    id: 1,
    title: "Meeting with Laura Perez",
    time: "10:30 AM - 11:30 AM (UTC)",
    tag: "Product Manager",
    bgClass: "blue",
    users: 1,
  },
  {
    id: 2,
    title: "Meeting with James Brown",
    time: "8:00 AM - 9:00 AM (UTC)",
    tag: "Marketing",
    bgClass: "yellow",
    users: 2,
  },
  {
    id: 3,
    title: "Meeting with Arthur Gauthier",
    time: "9:00 AM - 10:00 AM (UTC)",
    tag: "Partnership",
    bgClass: "purple",
    users: 6,
  },
 
];

export default function MeetingCard() {
  const [tabs, setTabs] = useState(tabsData);

  const activeTab = tabs.find((tab) => tab.active)?.id;

  const handleTabClick = (id) => {
    setTabs(
      tabs.map((tab) => ({
        ...tab,
        active: tab.id === id,
      }))
    );
  };

  return (
    <div>
      <div className="tabs mb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${tab.active ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "meetings" && (
        <>
          {meetingsData.map((item) => (
            <div key={item.id} className={`meeting-card ${item.bgClass}`}>
              <div className="card-top">
                <div>
                  <p className="title">{item.title}</p>
                  <p className="time">{item.time}</p>
                </div>
                <span className="material-icons-round expand">
                  expand_more
                </span>
              </div>

              <div className="card-bottom">
                <div className="avatars">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" />
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" />
                  <div className="more">+{item.users}</div>
                </div>

                <span className="tag">{item.tag}</span>
              </div>
            </div>
          ))}
        </>
      )}

      {activeTab !== "meetings" && (
        <p style={{ fontSize: "12px", color: "#6b7280" }}>
          No data available
        </p>
      )}
    </div>
  );
}
