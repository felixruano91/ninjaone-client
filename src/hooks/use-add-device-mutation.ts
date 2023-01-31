import { Device } from "@/types";
import { useMutation } from "react-query";
import { addDevice } from "@/service";

const useAddDeviceMutation = (data: Device) => useMutation(() => addDevice(data));

export {
    useAddDeviceMutation,
}