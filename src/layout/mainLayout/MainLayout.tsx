import { Header } from "../../component/Header";
import React from "react";
import styled from "styled-components";
import { Footer } from "../../component/Footer";

interface PropsType {
  children: React.ReactNode;
}

const StyledPage = styled.div`
  width: 1230px;
  margin-left: auto;
  margin-right: auto;
  min-height: 75vh;
`;
export const MainLayout: React.FC<PropsType> = ({ children }) => {
  return (
    <div>
      <Header />;<StyledPage>{children}</StyledPage>
      <Footer />;
    </div>
  );
};
