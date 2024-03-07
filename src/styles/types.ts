import { css } from 'styled-components';
import { sizes } from './utils';

import * as i from 'types';

export type MediaUtils = {
    [size in i.MediaSizes]: (...args: Parameters<typeof css>) => ReturnType<typeof css>;
  };
  
export type MediaSizes = keyof typeof sizes;
