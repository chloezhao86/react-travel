import React from "react";
import "./App.css";
import { Header } from "./componenst/Header";
import styled from "styled-components";
import { Footer } from "./componenst/Footer";
import { Row, Col } from "antd";
import { Carousel } from "./componenst/Carousel";
import { SideMenu } from "./componenst/sideMenu";

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
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
      </StyledPage>
      <Footer />
    </>
  );
}

export default App;
