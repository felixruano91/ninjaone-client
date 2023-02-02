import { useMutation } from "react-query";
import { deleteDevice } from "@/service";
import { queryClient } from "@/lib/react-query";
import { MutationParams } from "@/types";

const useDeleteDeviceMutation = ({ onSuccess, onError }: MutationParams) =>
  useMutation((id: string) => deleteDevice(id), {
    onSuccess: () => {
      onSuccess();
      return queryClient.invalidateQueries(['devices']);
    },
    onError,
  });

export {
  useDeleteDeviceMutation,
}