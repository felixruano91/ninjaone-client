import { useAddDeviceMutation, useEditDeviceMutation } from "@/hooks";
import { RegisterOptions, SubmitHandler, useForm } from "react-hook-form";
import { Device, DevicePayload, DeviceType } from "@/types";
import { useCallback, useEffect } from "react";
import { onError } from "@/utils";

type Params = {
  device?: Device;
  onClose: VoidFunction;
}

const useDeviceModal = ({ device, onClose }: Params) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DevicePayload>();

  const registerRequiredField = useCallback(
    (name: keyof DevicePayload, options?: RegisterOptions) => register(name, {
      required: 'This is required',
      ...options
    }),
    [register]
  );

  const handleOnClose = useCallback(
    () => {
      reset();
      onClose();
    },
    [reset, onClose]
  );

  const { mutate: addDevice } = useAddDeviceMutation({
    onSuccess: handleOnClose,
    onError,
  });
  const { mutate: editDevice } = useEditDeviceMutation({
    onSuccess: handleOnClose,
    onError,
  });

  const onSubmit: SubmitHandler<DevicePayload> = useCallback(async (values, event) => {
    try {
      event?.preventDefault();
      if (device) {
        await editDevice({ id: device.id, ...values });
      } else {
        await addDevice(values);
      }
    } catch (e) {
      console.error(e);
    }
  }, [addDevice, handleOnClose, device, editDevice])

  useEffect(() => {
    reset({
      system_name: device?.system_name ?? '',
      hdd_capacity: device?.hdd_capacity ?? '',
      type: device?.type ?? '' as DeviceType,
    });
  }, [device, reset])

  return {
    handleSubmit: handleSubmit(onSubmit),
    handleOnClose,
    errors,
    isSubmitting,
    registerRequiredField,
  }
}

export {
  useDeviceModal,
}
