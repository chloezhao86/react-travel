import { useParams } from "react-router-dom";
import axios from "axios";

type MatchParams = {
  touristRouteId: string;
  other: string;
};
export const Detail = () => {
  const params = useParams<MatchParams>();
  return <>详情页面,路线ID：{params.touristRouteId}</>;
};
