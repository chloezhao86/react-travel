import React from "react";
import "./App.css";
import { Header } from "./componenst/Header";
import styled from "styled-components";
import { Input, Layout, Typography, Menu, Button, Dropdown } from "antd";
import logo from "./assets/logo.svg";
import { GlobalOutlined } from "@ant-design/icons";
import { Footer } from "./componenst/Footer";
import { Row, Col } from "antd";

const StyledPage = styled.div`
  width: 1230px;
  margin-left: auto;
  margin-right: auto;
  min-height: 75vh;
`;

function App() {
  return (
    <>
      <Header />;
      <StyledPage>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <div style={{ background: "red" }}>多重菜单</div>
          </Col>
          <Col span={18}>
            <div style={{ background: "blue" }}>走马灯</div>
          </Col>
        </Row>
      </StyledPage>
      <Footer />
    </>
  );
}

export default App;
