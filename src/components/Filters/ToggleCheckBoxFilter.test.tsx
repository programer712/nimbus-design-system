import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import ToggleCheckBoxFilter, { ToggleCheckBoxFilterProps } from './ToggleCheckBoxFilter';

const renderToggleCheckBoxFilter = ({
  items,
  onApply = () => {},
  filterName = 'Apps',
  checkBoxDescription = 'checkbox description',
}: MultiSelectFilterProps) => {
  render(<ToggleCheckBoxFilter onApply={onApply} checkBoxDescription={checkBoxDescription} filterName={filterName} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  return waitFor(() => screen.getByTestId('toggle-filter'));
};

const toggleCheckBoxFilterDefault: ToggleCheckBoxFilterProps = {
  onApply: () => {},
  filterName: 'ToggleCheckbox',
  checkBoxDescription: 'checkbox description',
};

it('should have apply disabled when no change was done', async () => {
  await renderToggleCheckBoxFilter(toggleCheckBoxFilterDefault);
  expect(screen.getByText('Apply').parentElement).toBeDisabled();
});

it('should have apply button enabled once a change was done', async () => {
  await renderToggleCheckBoxFilter(toggleCheckBoxFilterDefault);
  fireEvent.click(screen.getByText(toggleCheckBoxFilterDefault.checkBoxDescription));
  await waitFor(() => expect(screen.getByText('Apply').parentElement).toBeEnabled());
});

it('should return applied values and close filter when pressing apply', async () => {
  const handleClick = jest.fn();
  const toggleCheckBoxFilter: ToggleCheckBoxFilterProps = {
    onApply: handleClick,
    filterName: 'ToggleCheckbox',
    checkBoxDescription: 'checkbox description',
  };

  await renderToggleCheckBoxFilter(toggleCheckBoxFilter);
  fireEvent.click(screen.getByText(toggleCheckBoxFilterDefault.checkBoxDescription));
  await waitFor(() => expect(screen.getByText('Apply').parentElement).toBeEnabled());
  fireEvent.click(screen.getByText('Apply'));
  expect(handleClick).toHaveBeenCalledWith(true);
  await waitFor(() => expect(screen.getByTestId('toggle-filter').parentElement).toHaveStyle({ visibility: 'hidden' }));
});

it('should close toggle filter when clicking on cancel', async () => {
  await renderToggleCheckBoxFilter(toggleCheckBoxFilterDefault);
  fireEvent.click(screen.getByText('Cancel'));
  await waitFor(() => expect(screen.getByTestId('toggle-filter').parentElement).toHaveStyle({ visibility: 'hidden' }));
});
