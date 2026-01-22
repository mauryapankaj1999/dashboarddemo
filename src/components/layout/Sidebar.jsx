import React, { useState } from "react";

import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  LogoutOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  ProjectOutlined,
  TeamOutlined,
  GiftOutlined,
  FileTextOutlined,
  RightOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const items = [
  {
    key: "sub1",
    label: "Dashboard",
    icon: <MailOutlined />,
    children: [
      {
        key: "g1",
        type: "group",
        children: [
          { key: "1", label: "Option 1" },
          { key: "2", label: "Option 2" },
        ],
      },
    ],
  },
  {
    key: "3",
    label: "Calendar",
    icon: <CalendarOutlined />,
  },
  {
    key: "4",
    label: "Time Off",
    icon: <ClockCircleOutlined />,
  },
  {
    key: "5",
    label: "Projects",
    icon: <ProjectOutlined />,
  },
  {
    key: "6",
    label: "Team",
    icon: <TeamOutlined />,
  },
  {
    key: "7",
    label: "Benefits",
    icon: <GiftOutlined />,
  },
  {
    key: "8",
    label: "Documents",
    icon: <FileTextOutlined />,
  },

  {
    key: "grp",
    label: "TEAMS",
    type: "group",
    children: [
      {
        key: "13",
        label: (
          <div className="team-item dflex">
            <div className="textblack">
              <span>Horizon Shift</span>
            </div>
            <div className="">
              <RightOutlined className="team-arrow" />
            </div>
          </div>
        ),
      },
      { key: "14", 
        label: 
        (
          <div className="team-item dflex">
            <div className="textblack">
              <span>Horizon Shift</span>
            </div>
            <div className="">
              <RightOutlined className="team-arrow" />
            </div>
          </div>
        ),
        
      },
      { key: "15", label:
        (
          <div className="team-item dflex">
            <div className="textblack">
              <span>Google UX Course</span>
            </div>
            <div className="">
              <RightOutlined className="team-arrow" />
            </div>
          </div>
        )
        },
      { key: "16", label: "Settings" },
      { key: "17", label: "Support" },
    ],
  },
];

export default function Sidebar() {
  const [openKeys, setOpenKeys] = useState([]);

  const onOpenChange = (keys) => {
    setOpenKeys(keys);
  };
  return (
    <Sider width={260} className="sidebardashbore">
      <div className="logosidebar">
        <div className="logosidebarlabel">H</div>
        HR Management
      </div>
      {/* <hr className="hrline" /> */}
      <Menu
        mode="inline"
        items={items}
        defaultOpenKeys={["sub1"]}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        defaultSelectedKeys={["1"]}
        className="dashboardsidebar"
      />

      <div
      className="sidebarboomfixd"
        style={{
          
        }}
      >
        <Menu mode="inline" selectable={false}>
          <Menu.Item
            key="logout"
            icon={<LogoutOutlined />}
            style={{ color: "#ef4444" }}
            onClick={() => alert("Logout clicked")}
          >
            Logout
          </Menu.Item>
        </Menu>
      </div>
    </Sider>
  );
}
