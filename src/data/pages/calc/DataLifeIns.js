import { DataBi7drr } from './DataBi7drr';
import { DataIMT3 } from './DataIMT3';
import { DataIMT4 } from './DataIMT4';

export const DataLifeIns = {
  bi7drr: DataBi7drr,
  radix: 100000,
  imt4: {
    male: DataIMT4.male,
    female: DataIMT4.female,
  },
  imt3: {
    male: DataIMT3.male,
    female: DataIMT3.female,
  },
};
