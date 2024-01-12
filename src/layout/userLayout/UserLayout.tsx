import React from "react";

import { Link } from "react-router-dom";
import { CaretDownOutlined } from "@ant-design/icons";
import { Layout, Menu, Dropdown, Button } from "antd";
import styled from "styled-components";

const { Header, Footer, Content } = Layout;

interface PropsTypes {
  children: React.ReactNode;
}

const StyledUserLayout = styled(Layout)`
  height: 100vh;
  background-image: url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg") !important;
  background-size: 100% !important;
  background-repeat: no-repeat;
  background-position: center 110px;
`;
export const UserLayout: React.FC<PropsTypes> = (props) => {
  const menu = (
    <Menu>
      <Menu.Item>中文</Menu.Item>
      <Menu.Item>English</Menu.Item>
    </Menu>
  );
  const StyledLang = styled.div`
    float: right;
  `;
  const StyledHeader = styled(Header)`
    background: transparent !important;
  `;

  const StyledContent = styled(Content)`
    flex: 1;
    padding: 32px 0;
  `;
  const StyledTop = styled.div`
    text-align: center;
  `;
  const StyledContentHeader = styled.div`
    height: 44px;
    line-height: 44px;
  `;
  const StyledDesc = styled.div`
    margin-top: 16px;
    margin-bottom: 40px;
  `;
  const StyledTitle = styled.span`
    position: relative;
    top: 2px;
    color: #1890ff;
    font-weight: 600;
    font-size: 33px;
    font-family: Avenir, "Helvetica Neue", Arial, Helvetica, sans-serif;
  `;
  const StyledLogo = styled.img`
    height: 44px;
    margin-right: 16px;
    vertical-align: top;
    float: none;
  `;
  return (
    <StyledUserLayout>
      <StyledHeader>
        <StyledLang>
          <Dropdown overlay={menu}>
            <Button>
              {" "}
              选择语言 <CaretDownOutlined />
            </Button>
          </Dropdown>
        </StyledLang>
      </StyledHeader>
      <StyledContent>
        <StyledTop>
          <StyledContentHeader>
            <Link to="/">
              <StyledLogo alt="logo" />
              <StyledTitle>React 旅游网</StyledTitle>
            </Link>
          </StyledContentHeader>
          <StyledDesc>慕课网 是我朝最具影响力的 线上课程学习网站</StyledDesc>
          {props.children}
        </StyledTop>
      </StyledContent>
      <Footer style={{ textAlign: "center" }}>Footer就不写了，太累了</Footer>
    </StyledUserLayout>
  );
};
