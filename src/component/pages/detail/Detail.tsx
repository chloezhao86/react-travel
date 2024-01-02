import { useParams } from "react-router-dom";

type MatchParams = {
  touristRouteId: string;
  other: string;
};
export const Detail = () => {
  const params = useParams<MatchParams>();
  return <>详情页面,路线ID：{params.touristRouteId}</>;
};
