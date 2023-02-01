import { DevicePayload } from "@/types";
import { useMutation } from "react-query";
import { addDevice } from "@/service";
import { queryClient } from "@/lib/react-query";

const useAddDeviceMutation = () => useMutation((data: DevicePayload) => addDevice(data), {
  onSuccess: () => queryClient.invalidateQueries(['devices'])
});

export {
  useAddDeviceMutation,
}