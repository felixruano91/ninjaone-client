import { useQuery } from "react-query";
import { getDeviceById } from "@/service";

const useDeviceQuery = (id: string) => useQuery(['device', id], () => getDeviceById(id));

export {
  useDeviceQuery,
}