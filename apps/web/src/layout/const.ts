import {
  IconBugReport,
  IconGroups3,
  IconHome,
  IconMediation,
  IconStacks,
} from '../components/atoms/icons';

export const MenuItems = [
  { name: 'Home', path: '/', icon: IconHome },
  { name: 'Projects', path: '/projects', icon: IconStacks },
  { name: 'Tracks', path: '/tracks', icon: IconMediation },
  { name: 'Issues', path: '/issues', icon: IconBugReport },
  { name: 'My Team', path: '/my-team', icon: IconGroups3 },
];
