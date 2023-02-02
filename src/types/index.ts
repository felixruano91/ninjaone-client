enum DeviceType {
  WINDOWS = 'WINDOWS',
  MAC = 'MAC',
  LINUX = 'LINUX',
}

type Device = {
  id: string;
  system_name: string;
  type: DeviceType;
  hdd_capacity: string;
}

type DevicePayload = Pick<Device, 'system_name' | 'type' | 'hdd_capacity'>;

type MutationParams = {
  onSuccess: VoidFunction;
  onError: VoidFunction;
}

export {
  DeviceType,
}

export type {
  Device,
  DevicePayload,
  MutationParams,
}