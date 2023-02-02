import { useMutation } from "react-query";
import { Device, MutationParams } from "@/types";
import { editDevice } from "@/service";
import { queryClient } from "@/lib/react-query";

const useEditDeviceMutation = ({ onSuccess, onError }: MutationParams) =>
  useMutation((device: Device) => editDevice(device), {
    onSuccess: () => {
      onSuccess();
      return queryClient.invalidateQueries(['devices'])
    },
    onError,
  });

export {
  useEditDeviceMutation,
}
