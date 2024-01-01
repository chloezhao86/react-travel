import { Col, Divider, Row, Typography } from "antd";
import React from "react";
import image1 from "../../assets/facebook-807588_640.png";
import image2 from "../../assets/microsoft-80658_640.png";
import image3 from "../../assets/follow-826033_640.png";
import image4 from "../../assets/icon-720944_640.png";

const companies = [
  { src: image1, title: "Microsoft" },
  { src: image2, title: "youtube" },
  { src: image3, title: "ins" },
  { src: image4, title: "facebook" },
];

export const BussinessPartners = () => {
  return (
    <>
      <Divider orientation={"left"}>
        <Typography.Title level={3}>合作企业</Typography.Title>
      </Divider>
      <Row>
        {companies.map((c, index) => {
          return (
            <Col span={6} key={index}>
              <img
                src={c.src}
                alt=""
                style={{
                  width: "80%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};
