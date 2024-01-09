import React, { useEffect } from "react";
import { Footer } from "../../Footer";
import { Header } from "../../Header";
import styled from "styled-components";
import { FilterArea } from "../../filter";
import { ProductList } from "../productList";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Spin } from "antd";
import { searchProduct } from "../../../redux/productSearch/slice";
import { useSelector } from "react-redux";

const StyledPageContent = styled.div`
  width: 1230px;
  margin-left: auto;
  margin-right: auto;
  min-height: 75vh;
`;
const StyledProductListContainer = styled.div`
  padding: 20px;
  margin-top: 20px;
  background: white;
`;
type MatchParams = {
  keywords: string;
};
export const SearchPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { keywords } = useParams<MatchParams>();
  //@ts-ignore
  const loading = useSelector((state) => state.productSearch.loading);
  //@ts-ignore
  const error = useSelector((s) => s.productSearch.error);
  //@ts-ignore
  const pagination = useSelector((s) => s.productSearch.pagination);
  //@ts-ignore
  const productList = useSelector((s) => s.productSearch.data);
  useEffect(() => {
    if (keywords) {
      // @ts-ignore
      dispatch(searchProduct({ nextPage: 1, pageSize: 10, keywords }));
    }
  }, [location]);
  if (loading) {
    return <Spin />;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  const onPageChange = (nextPage: number, pageSize: number) => {
    if (keywords) {
      // @ts-ignore·1
      dispatch(searchProduct({ nextPage, pageSize, keywords }));
    }
  };
  return (
    <>
      <Header />
      <StyledPageContent>
        <StyledProductListContainer>
          <FilterArea />
        </StyledProductListContainer>
        <StyledProductListContainer>
          <ProductList
            data={productList}
            paging={pagination}
            onPageChange={onPageChange}
          />
        </StyledProductListContainer>
      </StyledPageContent>
      <Footer />
    </>
  );
};
