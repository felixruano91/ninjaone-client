import { useQuery } from "react-query";
import { getDevices } from "@/service";
import { Device } from "@/types";

const useDevicesQuery = () => useQuery<Device[]>('devices', getDevices);

export {
  useDevicesQuery,
}