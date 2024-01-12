import styled from "styled-components";
import { Header } from "../../Header";
import { Col, Row, Typography } from "antd";
import { SideMenu } from "../../sideMenu";
import { Carousel } from "../../Carousel";
import { ProductCollection } from "../../productCollection";
import sideImage3 from "../../../assets/sider_2019_12-09.png";
import { productList1, productList2, productList3 } from "./mockups";
import sideImage2 from "../../../assets/sider_2019_02-04.png";
import sideImage from "../../../assets/sider_2019_02-04-2.png";
import { BussinessPartners } from "../../BussinessPartners";
import { Footer } from "../../Footer";
import React from "react";
import { MainLayout } from "../../../layout/mainLayout";

export const HomePage = () => {
  return (
    <MainLayout>
      <Row style={{ marginTop: 20 }}>
        <Col span={6}>
          <SideMenu />
        </Col>
        <Col span={18}>
          <Carousel />
        </Col>
      </Row>
      <ProductCollection
        title={
          <Typography.Title level={3} type="warning">
            爆款推荐
          </Typography.Title>
        }
        sideImage={sideImage3}
        products={productList1}
      />
      <ProductCollection
        title={
          <Typography.Title level={3} type="danger">
            新品上市
          </Typography.Title>
        }
        sideImage={sideImage2}
        products={productList2}
      />
      <ProductCollection
        title={
          <Typography.Title level={3} type="warning">
            国内游推荐
          </Typography.Title>
        }
        sideImage={sideImage}
        products={productList3}
      />

      <BussinessPartners />
    </MainLayout>
  );
};
