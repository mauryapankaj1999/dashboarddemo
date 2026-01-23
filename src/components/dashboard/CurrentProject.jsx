import React from "react";
import CardHeading from "../../reusablecomponents/CardHeading";
import {
  Apple,
  Calendar,
  ChartArea,
  ChevronRight,
  CloudLightning,
  Laptop,
  Pencil,
} from "lucide-react";
import avatrimg from "../../assets/img_avatar2.png";

export default function CurrentProject() {
      const team = [
    avatrimg,
    avatrimg,
    avatrimg,
    avatrimg,
    avatrimg,
    avatrimg,
  ];
  return (
    <>
      <CardHeading
        title="Current Project"
        icon={<CloudLightning size={16} />}
        actionText="See All"
        actionIcon={<ChevronRight size={14} />}
      />
      <div className="projectinfo">
        <div className="projectname">Project Name</div>
        <div className="projectinfotab">
          <div className="d-flex gap-2">
            <Laptop />
            <h4>Apple Store</h4>
          </div>
          <div>
            <div className="progressinfo">In Progress</div>
          </div>
        </div>

        <div className="projectlead">
          <div className="row">
            <div className="col-md-6 col-6">
              <div className="projecmanage">
                <h4>Project Manager</h4>
                <div className="imgflex">
                  <img src={avatrimg} alt="" />
                  <div className="name">Laura.p</div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-6">
              <div className="projecmanage">
                <h4>Design Lead</h4>
                <div  className="imgflex">
                  <img src={avatrimg} alt="" />
                  <div className="name">Laura.p</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="teamproject">
      <h4>Team</h4>
      <div className="teamrow">
        <ul className="avatarlist">
          {team.map((img, index) => (
            <li key={index}>
              <img src={img} alt="team" />
            </li>
          ))}
        </ul>
        <span className="morepeople">+8 people</span>
      </div>
    </div>
     <div className="project-meta">
      <div className="meta-block">
        <p className="meta-label">Timeline</p>
        <div className="meta-row">
          <Calendar size={16} />
          <span>12/10/2022 - 01/04/2023</span>
        </div>
      </div>

      <div className="meta-block">
        <p className="meta-label">Description</p>
        <div className="meta-row">
          <Pencil size={16} />
          <span>Updating guideline in a detailed scale.</span>
        </div>
      </div>
    </div>
      </div>
    </>
  );
}
