import { DevicePayload, MutationParams } from "@/types";
import { useMutation } from "react-query";
import { addDevice } from "@/service";
import { queryClient } from "@/lib/react-query";

const useAddDeviceMutation = ({ onSuccess, onError }: MutationParams) =>
  useMutation((data: DevicePayload) => addDevice(data), {
    onSuccess: () => {
      onSuccess();
      return queryClient.invalidateQueries(['devices'])
    },
    onError,
  });

export {
  useAddDeviceMutation,
}