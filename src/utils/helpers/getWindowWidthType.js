import { BREAKPOINT_WIDTH_DESKTOP, BREAKPOINT_WIDTH_TAB } from '../constants';

/**
 * @param {number} width
 * @returns {'desktop' | 'tab' | 'mobile'}
 */
export function getWindowWidthType(width) {
  return width >= BREAKPOINT_WIDTH_DESKTOP
    ? 'desktop'
    : width >= BREAKPOINT_WIDTH_TAB
    ? 'tab'
    : 'mobile';
}
