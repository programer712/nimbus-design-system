import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import { UploadSingleFile } from './UploadSingleFile.stories';

describe('UploadSingleFile', () => {
  const testFile = new File([''], 'File name');
  const testFileDetails = `${testFile.name} (${testFile.size} B)`;

  it('should render drag and drop input', () => {
    render(<UploadSingleFile {...UploadSingleFile.args} error={undefined}></UploadSingleFile>);
    expect(screen.getByTestId('drag-input')).toBeInTheDocument();
  });

  it('should drag the file on the input', async () => {
    render(<UploadSingleFile {...UploadSingleFile.args}></UploadSingleFile>);
    fireEvent.change(screen.getByTestId('drag-input'), {
      target: { files: [testFile] },
    });
    await waitFor(() => screen.getByText(testFileDetails));
    expect(screen.getByText(testFileDetails)).toBeInTheDocument();
  });

  it('should not set the file when drag & drop does not receive file', async () => {
    render(<UploadSingleFile {...UploadSingleFile.args}></UploadSingleFile>);
    fireEvent.change(screen.getByTestId('drag-input'), {
      target: { files: [] },
    });
    await waitFor(() => screen.getByText(UploadSingleFile.args.title));
    expect(screen.getByText(UploadSingleFile.args.title)).toBeInTheDocument();
  });

  it('should set the file received on the props', () => {
    render(<UploadSingleFile {...UploadSingleFile.args} file={testFile}></UploadSingleFile>);
    expect(screen.getByText(testFileDetails)).toBeInTheDocument();
  });

  it('should trucate the file name if is long', () => {
    const testLongFile = new File([''], 'This is a very long file name');
    const { getByText } = render(<UploadSingleFile {...UploadSingleFile.args} file={testLongFile}></UploadSingleFile>);
    expect(screen.getByText(`${testLongFile.name.substring(0, 25)}... (0 B)`)).toBeInTheDocument();
  });
});
