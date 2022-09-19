import { Story } from '@storybook/react';
import React, { useState } from 'react';
import MUploadSingleFile from './MUploadSingleFile';
export default {
  title: 'Components/Upload',
};

const Template: Story<any> = (args) => {
  const [file, setFile] = useState(args.file);
  return (
    <MUploadSingleFile
      {...args}
      file={file}
      setFile={(file: File) => {
        setFile(file);
      }}
    ></MUploadSingleFile>
  );
};

export const UploadSingleFile = Template.bind({});

UploadSingleFile.args = {
  title: 'Drop or Select file',
  subtitle: 'Drop here',
  dropTexts: {
    pre: 'Drop files here or click',
    selected: 'change',
    unselected: 'browse',
    post: 'thorough your machine',
  },
  icon: 'https://minimals.cc/static/illustrations/illustration_upload.svg',
  error: false,
  file: null,
  className: '',
};
