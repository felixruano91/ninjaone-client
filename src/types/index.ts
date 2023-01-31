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

export {
  DeviceType,
}

export type {
  Device,
}