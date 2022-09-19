import { Story } from '@storybook/react';
import React from 'react';
import SideBar from './SideBar';
import AuthUserAvatar from './AuthUserAvatar';
import GuardianLogo from './GuardianLogo';
import { storybookMenuLinks as menuLinks } from './utils';

export default {
  title: 'Components/SideBars',
};

const Template: Story = (args) => {
  return <SideBar {...args} />;
};
export const Default = Template.bind({});

Default.args = {
  isOpenNav: true,
  menuLinks,
};

export const WithAuthAndLogo = Template.bind({});

WithAuthAndLogo.args = {
  isOpenNav: true,
  menuLinks,
  topContent: (
    <>
      <GuardianLogo style={{ margin: '30px' }} />
      <AuthUserAvatar
        avatarProps={{ src: 'https://picsum.photos/200' }}
        primaryText="John Doe"
        secondaryText="Logout"
      />
    </>
  ),
};
