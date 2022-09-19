import { ExtractionSummary, ExtractionSummaryProps } from './ExtractionSummary';
import { DeviceTableProps } from './DeviceTable';
import { DeviceExtractionsProps } from './DeviceExtractions';
import { MalwareScannerProps } from './MalwareScanner';
import React from 'react';

export default {
  title: 'Guardian/Summary/ExtractionSummary',
};

let Template = (
  args: JSX.IntrinsicAttributes & ExtractionSummaryProps & DeviceTableProps & DeviceExtractionsProps & MalwareScannerProps
) => <ExtractionSummary {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      name: 'chats',
      count: 40,
    },
    {
      name: 'calls',
      count: 120,
    },
  ],
  isLoading: false,
};
