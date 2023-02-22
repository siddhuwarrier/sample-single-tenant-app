import { Action } from '@sample-single-tenant-app/shared/models';

export const samplePolicies = [
  {
    src: 'any',
    dest: 'any',
    action: Action.ALLOW,
  },
  {
    src: '10.10.1.1',
    dest: 'any',
    action: Action.DENY,
  },
  {
    src: '192.168.1.1',
    dest: '10.2.3.5',
    action: Action.DENY,
  },
];
