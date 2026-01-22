import React from "react";
import { Layout } from "antd";
import Sidebar from "./Sidebar";
import Header from "./Header";

const { Sider, Content } = Layout;

export default function MainLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={260} breakpoint="lg" collapsedWidth="0">
        <Sidebar />
      </Sider>

      <Layout>
        <Content className="wraperdashboard" style={{  }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
