import { useMutation } from "react-query";
import { Device } from "@/types";
import { editDevice } from "@/service";
import { queryClient } from "@/lib/react-query";

const useEditDeviceMutation = () => useMutation((device: Device) => editDevice(device), {
  onSuccess: () => queryClient.invalidateQueries(['devices'])
});

export {
  useEditDeviceMutation,
}
