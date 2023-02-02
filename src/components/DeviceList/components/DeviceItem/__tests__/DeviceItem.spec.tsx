import { render } from "@testing-library/react";
import { expect, vitest } from "vitest";
import { DeviceItem } from "../DeviceItem";
import { DevicePayload, DeviceType } from "@/types";

const device: DevicePayload = {
  system_name: 'COOL-DEVICE',
  type: DeviceType.MAC,
  hdd_capacity: '1000'
}

describe('DeviceItem', () => {
  const onEdit = vitest.fn();
  const onDelete = vitest.fn();
  it('should render MAC device', () => {
    const component = render(
      <DeviceItem
        {...device}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
    expect(component.findByTestId('type-mac')).toBeTruthy();
  });

  it('should render LINUX device', () => {
    const component = render(
      <DeviceItem
        {...{ ...device, type: DeviceType.LINUX }}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
    expect(component.findByTestId('type-linux')).toBeTruthy();
  });

  it('should render WINDOWS device', () => {
    const component = render(
      <DeviceItem
        {...{ ...device, type: DeviceType.WINDOWS }}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
    expect(component.findByTestId('type-windows')).toBeTruthy();
  });
});