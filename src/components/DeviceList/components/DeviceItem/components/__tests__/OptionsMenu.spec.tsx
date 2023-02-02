import { expect, vitest } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import { OptionsMenu } from "../OptionsMenu";

describe('OptionsMenu', () => {
  const onEdit = vitest.fn();
  const onDelete = vitest.fn();
  it('should render', () => {
    const component = render(
      <OptionsMenu
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
    expect(component).toBeTruthy();
  });

  it('should call onEdit once', async () => {
    const component = render(
      <OptionsMenu
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
    const editButton = await component.findByText('Edit');

    fireEvent.click(editButton);

    expect(onEdit).toBeCalled();
  });

  it('should call onDelete once', async () => {
    const component = render(
      <OptionsMenu
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
    const deleteButton = await component.findByText('Delete');

    fireEvent.click(deleteButton);

    expect(onEdit).toBeCalled();
  });
});