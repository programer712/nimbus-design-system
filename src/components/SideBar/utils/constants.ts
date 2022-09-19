import { ArrowIcon, ChatIcon, CogIcon } from '../../../assets/icons';

export const storybookMenuLinks = [
  {
    subheader: 'investigative views',
    items: [
      {
        icon: CogIcon,
        title: 'dashboard',
        href: 'dashboard',
        items: [
          {
            title: 'app',
            href: '/app',
          },
          {
            title: 'e-commerce',
            href: '/ecommerce',
          },
          {
            title: 'analytics',
            href: '/analytics',
          },
        ],
      },
      { title: 'chat', href: 'chat', icon: ChatIcon },
    ],
  },
  {
    subheader: 'User data',
    items: [
      {
        title: 'user',
        href: '/user',
        icon: CogIcon,
        items: [
          {
            title: 'profile',
            href: 'profile',
          },
        ],
      },
    ],
  },
  {
    subheader: 'Coming Soon',
    items: [
      {
        title: 'New data item',
        href: 'new',
        icon: ArrowIcon,
        disabled: true,
      },
    ],
  },
];
