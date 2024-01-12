import { useParams } from "react-router-dom";
import axios from "axios";
import { MainLayout } from "../../../layout/mainLayout";

type MatchParams = {
  touristRouteId: string;
  other: string;
};
export const Detail = () => {
  const params = useParams<MatchParams>();
  return (
    <>
      {" "}
      <MainLayout>详情页面,路线ID：{params.touristRouteId}</MainLayout>
    </>
  );
};
