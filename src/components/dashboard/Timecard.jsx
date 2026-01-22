import React from "react";
import CardHeading from "../../reusablecomponents/CardHeading";
import { Progress, Tag } from "antd";
import {
  Check,
  ChevronRight,
  ClosedCaptionIcon,
  Timer,
  TrendingUp,
  X,
} from "lucide-react";

export default function Timecard() {
  const used = 16;
  const total = 20;
  const percent = (used / total) * 100;

  const datatime = [
    {
      id: 1,
      date: "July 15 2026",
      type: "Sick",
      status: "Pending",
    },
    {
      id: 2,
      date: "July 15 2026",
      type: "Annual",
      status: "Confirmed",
    },
    {
      id: 3,
      date: "July 15 2026",
      type: "Casual",
      status: "Rejected",
    },
  ];

  return (
    <>
      <CardHeading
        title="Time Off"
        icon={<Timer size={16} />}
        actionText="See All"
        actionIcon={<ChevronRight size={14} />}
      />
      <div className="d-flex align-items-center justify-content-between">
        <Progress
          type="dashboard"
          percent={percent}
          strokeWidth={10}
          strokeColor="#22c55e"
          trailColor="#e5e7eb"
          format={() => (
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: 22, fontWeight: 600, marginBottom: 10 }}>
                {used}
              </div>
              <div style={{ fontSize: 12, color: "#64748b" }}>
                OUT OF {total}
              </div>
            </div>
          )}
        />
      </div>

      <div className="listtime">
        <ul>
          {datatime.map((item) => (
            <li key={item.id}>
              <div className="listli">
                <div className="leftside">
                  {item.status === "Pending" ? (
                    <Tag color="orange">
                      <TrendingUp />
                    </Tag>
                  ) : item.status === "Confirmed" ? (
                    <Tag color="green">
                      <Check />
                    </Tag>
                  ) : (
                    item.status === "Rejected" && (
                      <Tag color="red">
                        {" "}
                        <X />
                      </Tag>
                    )
                  )}
                  <div className="datetime">
                    {item.date}
                    <span>({item.type})</span>
                  </div>
                </div>
                <div
                  className={`statustime ${item.status === "Pending" ? "pending" : item.status === "Confirmed" ? "confirmed" : "rejected"}`}
                >
                  {item.status}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
