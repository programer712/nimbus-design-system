import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import MultiSelectFilter, { MultiSelectFilterProps } from './MultiSelectFilter';

const renderMultiSelectFilter = ({ items, onApply = () => {}, filterName = 'Apps' }: MultiSelectFilterProps) => {
  render(<MultiSelectFilter onApply={onApply} items={items} filterName={filterName} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  return waitFor(() => screen.getByTestId('multiselect-filter'));
};

it('should have apply disabled when no change was done', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  expect(screen.getByText('Apply').parentElement).toBeDisabled();
});

it('should have apply button enabled once a change was done', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App1'));
  await waitFor(() => expect(screen.getByText('Apply').parentElement).toBeEnabled());
});

it('should return applied values and close filter when pressing apply', async () => {
  const handleClick = jest.fn();
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: handleClick,
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App1'));
  await waitFor(() => expect(screen.getByText('Apply').parentElement).toBeEnabled());
  fireEvent.click(screen.getByText('Apply'));
  expect(handleClick).toHaveBeenCalledWith({ App1: true });
  await waitFor(() =>
    expect(screen.getByTestId('multiselect-filter').parentElement).toHaveStyle({ visibility: 'hidden' })
  );
});

it('should close multi select filter when clicking cancel', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('Cancel'));
  await waitFor(() =>
    expect(screen.getByTestId('multiselect-filter').parentElement).toHaveStyle({ visibility: 'hidden' })
  );
});

it('should restore values before change when clicking cancel', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App1'));
  await waitFor(() => expect(screen.getByText('Apply').parentElement).toBeEnabled());
  fireEvent.click(screen.getByText('Cancel'));
  await waitFor(() =>
    expect(screen.getByTestId('multiselect-filter').parentElement).toHaveStyle({ visibility: 'hidden' })
  );
  fireEvent.click(screen.getByText('Apps'));
  expect(screen.getByRole('checkbox')).not.toBeChecked();
});

it('should apply new values when clicking apply', async () => {
  const multiSelectFilter: MultiSelectFilterProps = {
    items: [{ id: 'App1', value: 'App1' }],
    onApply: () => {},
    filterName: 'Apps',
  };
  await renderMultiSelectFilter(multiSelectFilter);
  fireEvent.click(screen.getByText('App1'));
  await waitFor(() => expect(screen.getByText('Apply').parentElement).toBeEnabled());
  fireEvent.click(screen.getByText('Apply'));
  await waitFor(() =>
    expect(screen.getByTestId('multiselect-filter').parentElement).toHaveStyle({ visibility: 'hidden' })
  );
  fireEvent.click(screen.getByText('Apps'));
  expect(screen.getByRole('checkbox')).toBeChecked();
});
