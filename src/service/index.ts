import { apiClient } from "@/lib/axios";
import { Device, DevicePayload } from "@/types";

const getDevices = async () => await apiClient.get<Device[]>('/devices');
const editDevice = async (data: Device) => await apiClient.put<Device>(`/devices/${data.id}`, data);
const deleteDevice = async (id: string) => await apiClient.delete<any>(`/devices/${id}`);
const addDevice = async (data: DevicePayload) => await apiClient.post<any>('/devices', data);

export {
    getDevices,
    editDevice,
    deleteDevice,
    addDevice,
}