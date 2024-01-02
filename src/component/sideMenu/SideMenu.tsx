import React from "react";
import { sideMenuList } from "./mockup";
import { Menu } from "antd";
import { GifOutlined } from "@ant-design/icons";
import styled from "styled-components";

const StyledMenu = styled(Menu)`
  width: 256px;
  border: 5px solid #1976d2 !important;
`;
export const SideMenu = () => {
  return (
    <>
      <StyledMenu
        mode={"vertical"}
        items={sideMenuList.map((m) => {
          return {
            label: m.title,
            icon: <GifOutlined />,
            key: m.title,
            children: m.subMenu.map((sm) => {
              return {
                label: sm.title,
                icon: <GifOutlined />,
                key: sm.title,
                children: sm.subMenu.map((sms) => {
                  return {
                    label: sms,
                    icon: <GifOutlined />,
                    key: sms,
                  };
                }),
              };
            }),
          };
        })}
      ></StyledMenu>
    </>
  );
};
