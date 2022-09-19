import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { SelectSortAndOrderOption } from './SortSelect.stories';

it('should render sort select with expected args', () => {
  render(<SelectSortAndOrderOption {...SelectSortAndOrderOption.args}></SelectSortAndOrderOption>);
  expect(screen.getByTestId('sort-select-label')).toHaveTextContent(SelectSortAndOrderOption.args.label);
  expect(screen.getByTestId('sort-select-button')).toHaveTextContent(
    SelectSortAndOrderOption.args.options[0].sortByText
  );
  expect(screen.getByTestId('sort-select-input').getAttribute('value')).toBe(
    SelectSortAndOrderOption.args.options[0].sortByValue
  );
  expect(screen.getByTestId('sort-order-icon')).toBeInTheDocument();
});

it('should render sort select when not having a option selected', () => {
  render(
    <SelectSortAndOrderOption
      {...SelectSortAndOrderOption.args}
      disabled={undefined}
      sortBy={undefined}
      sortOrder={undefined}
    ></SelectSortAndOrderOption>
  );
  expect(screen.getByTestId('sort-select-label')).toHaveClass('notSelected');
  expect(screen.getByTestId('sort-select-container')).toHaveClass('notSelected');
});

const testSortSelectWhenClickingOnMenuOption = async (
  openMenuSelector: string,
  indexToSelect: number
): Promise<void> => {
  const onSortChangeStub = jest.fn();
  render(
    <SelectSortAndOrderOption
      {...SelectSortAndOrderOption.args}
      onSortChange={onSortChangeStub}
    ></SelectSortAndOrderOption>
  );
  fireEvent.click(screen.getByTestId(openMenuSelector));
  await waitFor(() => screen.getAllByTestId('sort-select-text')[indexToSelect]);
  fireEvent.click(screen.getAllByTestId('sort-select-text')[indexToSelect]);
  await waitFor(() => screen.getAllByTestId('sort-select-input'));
  expect(screen.getByTestId('sort-select-input').getAttribute('value')).toBe(
    SelectSortAndOrderOption.args.options[indexToSelect].sortByValue
  );
  expect(onSortChangeStub).toHaveBeenCalledWith(
    SelectSortAndOrderOption.args.options[indexToSelect].sortByValue,
    SelectSortAndOrderOption.args.sortOrder
  );
};

it('should open select menu when clicking the container button', async () => {
  await testSortSelectWhenClickingOnMenuOption('sort-select-button', 1);
});

it('should open select menu when clicking the input label', async () => {
  await testSortSelectWhenClickingOnMenuOption('sort-select-label', 2);
});

const testSortOrderWhenTogglingOnIconButton = async (expectedOrder: 'asc' | 'desc'): Promise<void> => {
  fireEvent.click(screen.getByTestId('sort-order-icon'));
  await waitFor(() => screen.getByTestId('sort-order-icon'));
  expect(screen.getByTestId('sort-order-icon')).toHaveClass(expectedOrder);
};

it('should apply the expected class when clicking the order icon', async () => {
  render(<SelectSortAndOrderOption {...SelectSortAndOrderOption.args}></SelectSortAndOrderOption>);
  await testSortOrderWhenTogglingOnIconButton('asc');
  await testSortOrderWhenTogglingOnIconButton('desc');
});
