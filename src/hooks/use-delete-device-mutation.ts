import { useMutation } from "react-query";
import { deleteDevice } from "@/service";
import { queryClient } from "@/lib/react-query";

const useDeleteDeviceMutation = () => useMutation((id: string) => deleteDevice(id), {
  onSuccess: () => queryClient.invalidateQueries(['devices'])
});

export {
  useDeleteDeviceMutation,
}