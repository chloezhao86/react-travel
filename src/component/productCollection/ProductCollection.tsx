import { Col, Divider, Row } from "antd";
import styled from "styled-components";
import { ProductImage } from "./ProductImage";

const StyledSideImg = styled.img`
  width: 180px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
const StyledContent = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: white;
`;

interface PropsType {
  title: JSX.Element;
  sideImage: string;
  products: any[];
}

export const ProductCollection = ({
  title,
  sideImage,
  products,
}: PropsType) => {
  return (
    <StyledContent>
      <Divider orientation={"left"}>{title}</Divider>
      <Row>
        <Col span={4}>
          <StyledSideImg src={sideImage} alt="" />
        </Col>
        <Col span={20}>
          <Row>
            <Col span={12}>
              <ProductImage
                id={products[0].id}
                size={"large"}
                imageSrc={products[0].touristRoutePictures[0].url}
                price={products[0].price}
                title={products[0].title}
              />
            </Col>
            <Col span={12}>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products[1].id}
                    size={"small"}
                    imageSrc={products[1].touristRoutePictures[0].url}
                    price={products[1].price}
                    title={products[1].title}
                  />
                </Col>
                <Col span={12}>
                  {" "}
                  <ProductImage
                    id={products[2].id}
                    size="small"
                    imageSrc={products[2].touristRoutePictures[0].url}
                    price={products[2].price}
                    title={products[2].title}
                  />
                </Col>
              </Row>
              <Row>
                <Col span={12}>
                  <ProductImage
                    id={products[3].id}
                    size="small"
                    imageSrc={products[3].touristRoutePictures[0].url}
                    price={products[3].price}
                    title={products[3].title}
                  />
                </Col>
                <Col span={12}>
                  <ProductImage
                    id={products[4].id}
                    size={"small"}
                    imageSrc={products[4].touristRoutePictures[0].url}
                    price={products[4].price}
                    title={products[4].title}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              {" "}
              <ProductImage
                id={products[5].id}
                size={"small"}
                imageSrc={products[5].touristRoutePictures[0].url}
                price={products[5].price}
                title={products[5].title}
              />
            </Col>
            <Col span={6}>
              {" "}
              <ProductImage
                id={products[6].id}
                size={"small"}
                imageSrc={products[6].touristRoutePictures[0].url}
                price={products[6].price}
                title={products[6].title}
              />
            </Col>
            <Col span={6}>
              {" "}
              <ProductImage
                id={products[7].id}
                size={"small"}
                imageSrc={products[7].touristRoutePictures[0].url}
                price={products[7].price}
                title={products[7].title}
              />
            </Col>
            <Col span={6}>
              {" "}
              <ProductImage
                id={products[8].id}
                size={"small"}
                imageSrc={products[8].touristRoutePictures[0].url}
                price={products[8].price}
                title={products[8].title}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledContent>
  );
};
