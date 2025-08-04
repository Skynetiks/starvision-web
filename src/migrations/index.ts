import * as migration_20250801_135255 from './20250801_135255';

export const migrations = [
  {
    up: migration_20250801_135255.up,
    down: migration_20250801_135255.down,
    name: '20250801_135255'
  },
];
