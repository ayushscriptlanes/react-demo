import { useSelector } from "react-redux";

export function useGetState() {
  return useSelector((state : any) => state.home);
}
