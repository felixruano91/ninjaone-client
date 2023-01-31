import { useMutation } from "react-query";
import { deleteDevice } from "@/service";

const useDeleteDeviceMutation = (id: string) => useMutation(() => deleteDevice(id));

export {
    useDeleteDeviceMutation,
}