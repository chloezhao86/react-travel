import React, { useEffect, useState } from "react";
import { Button, Dropdown, Input, Layout, Menu, Typography } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_LANGUAGE } from "../../redux/languageSlice";
import jwt_decode, { JwtPayload as DefaultJwtPayload } from "jwt-decode";
import { userSlice } from "../../redux/user/slice";

const AppContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.08);
`;
const AppLogo = styled.img`
  height: 60px;
  width: 60px;
  float: left;
  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;

    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
`;
const AppHeader = styled.div`
  background-color: white !important;
`;

const StyledLayoutHeader = styled(Layout.Header)`
  background-color: white !important;
  height: 60px;
  line-height: 60px;
  width: 88%;
  //margin-right: auto;
  //margin-left: auto;
`;

const MainHeader = styled(Typography.Title)`
  line-height: 64px !important;
  display: inline;
  color: #03a9f4 !important;
`;
const StyledInputSearch = styled(Input.Search)`
  width: 400px !important;
  line-height: 64px;
  margin-top: 17px;
  margin-left: 37px;
`;
const StyledButtonGroup = styled(Button.Group)`
  float: right;
  margin-top: 5px;
`;
const TopHeader = styled.div`
  height: 40px;
  padding-left: 4%;
  padding-right: 4%;
  display: block;
  background-color: #f5f5f5;
  line-height: 40px;
  margin-right: auto;
  margin-left: auto;
`;
const InnerDiv = styled.div`
  width: 88%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const StyledMenu = styled(Menu)`
  padding-left: 6% !important;
  padding-right: 6% !important;
  background-color: #1976d2 !important;
  color: #f5f5f5 !important;
`;

interface JwtPayload extends DefaultJwtPayload {
  username: string;
}

export const Header = () => {
  const navigate = useNavigate();
  const jwt = useSelector((s: any) => s.user.token);
  //@ts-ignore
  const language = useSelector((state) => state.language);
  const [username, setUsername] = useState("");
  useEffect(() => {
    if (jwt) {
      const decodedJwt = jwt_decode<JwtPayload>(jwt);
      // @ts-ignore
      setUsername(decodedJwt.aud);
    }
  }, [jwt]);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(userSlice.actions.logOut());
    navigate("/");
  };
  return (
    <>
      <AppContainer>
        <AppHeader>
          <TopHeader>
            <InnerDiv>
              <span>
                <Typography.Text style={{ wordBreak: "keep-all" }}>
                  让旅游更幸福
                </Typography.Text>
                <Dropdown.Button
                  style={{ marginLeft: 15 }}
                  menu={{
                    items: language.languageList.map((l: any) => {
                      return {
                        key: l.code,
                        label: l.name,
                      };
                    }),
                    onClick: (v) => {
                      dispatch(CHANGE_LANGUAGE(v.key));
                      console.log("v", v);
                    },
                  }}
                  icon={<GlobalOutlined />}
                >
                  语言
                </Dropdown.Button>
              </span>
              <p>{language.language}</p>
              {jwt ? (
                <StyledButtonGroup>
                  <span>
                    <Typography.Text>{username}</Typography.Text>
                  </span>
                  <Button>shopping cart</Button>
                  <Button onClick={onLogOut}>Log Out</Button>
                </StyledButtonGroup>
              ) : (
                <StyledButtonGroup>
                  <Button onClick={() => navigate("/register")}>
                    Register
                  </Button>
                  <Button onClick={() => navigate("/signin")}>Login</Button>
                </StyledButtonGroup>
              )}
            </InnerDiv>
          </TopHeader>
          <StyledLayoutHeader>
            <AppLogo src={logo} alt="" />
            <MainHeader level={3}>React Travel</MainHeader>
            <StyledInputSearch
              placeholder={"请输入旅游目的地，主题或关键字"}
              onSearch={(keywords) => {
                navigate("/search/" + keywords);
              }}
            />
          </StyledLayoutHeader>
          <StyledMenu
            mode={"horizontal"}
            items={[
              { key: "1", label: "旅游首页" },
              { key: "2", label: "周末游" },
              { key: "3", label: "跟团游" },
              { key: "4", label: "自由行" },
              { key: "5", label: "私家团" },
              { key: "6", label: "邮轮" },
              { key: "7", label: "酒店+景点" },
              { key: "8", label: "当地玩乐" },
              { key: "9", label: "主题游" },
              { key: "10", label: "定制游" },
              { key: "11", label: "游学" },
              { key: "12", label: "签证" },
              { key: "13", label: "企业游" },
              { key: "14", label: "高端游" },
              { key: "15", label: "爱玩户外" },
              { key: "16", label: "保险" },
            ]}
          ></StyledMenu>
        </AppHeader>
      </AppContainer>
    </>
  );
};
