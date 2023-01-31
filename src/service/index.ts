import { apiClient } from "@/lib/axios";
import { Device } from "@/types";

const getDevices = async () => await apiClient.get<Device[]>('/devices');
const getDeviceById = async (id: string) => await apiClient.get<Device>(`/devices/${id}`);
const deleteDevice = async (id: string) => await apiClient.delete<any>(`/devices/${id}`);
const addDevice = async (data: Device) => await apiClient.post<any>('/devices', data);

export {
    getDevices,
    getDeviceById,
    deleteDevice,
    addDevice,
}