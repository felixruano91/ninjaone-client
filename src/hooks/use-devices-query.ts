import { useQuery } from "react-query";
import { getDevices } from "@/service";
import { Device } from "@/types";
import { useCallback } from "react";

type Params = {
  search: string;
  sort: string;
  types: string[]
}

const useDevicesQuery = ({ search = '', sort = '', types = [] }: Params) => {
  const filterBySystemName = useCallback(
    ({ system_name }: Device) => system_name.toLowerCase().includes(search.toLowerCase()),
    [search]
  );
  const filterByType = useCallback(
    ({ type }: Device) => types.length > 0
      ? types.includes(type)
      : true,
    [types]
  );
  const filters = [filterByType, filterBySystemName];
  const sortBy = useCallback(
    (a: Device, b: Device) => sort === 'system_name'
      ? a.system_name.localeCompare(b.system_name)
      : (Number(b.hdd_capacity) - Number(a.hdd_capacity)),
    [sort]
  );
  const select = useCallback(
    (devices: Device[]) => {
      const filteredDevices = filters.reduce((data, f) => data.filter(f), devices);
      return sort
        ? filteredDevices.sort(sortBy)
        : filteredDevices
    },
    [sort, filters, sortBy]
  );
  return useQuery<Device[]>(
    'devices',
    getDevices,
    {
      select,
    }
  )
};

export {
  useDevicesQuery,
}