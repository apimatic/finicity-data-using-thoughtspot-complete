/**
 * Finicity APILib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { expandoObject, Schema, string } from '../schema';

/** All assets are SVGs so can be slightly resized without any issues. */
export interface Branding {
  /** File path of the institution's logo.  For white backgrounds designed at 375 x 72, has built in spacing around it to normalize brand sizing. */
  logo: string;
  /** File path of the instiitution's alternate logo.  For colored backgrounds designed at 375 x 72 has built in spacing around it to normalize brand sizing */
  alternateLogo: string;
  /** File path of the Institution's icon.  For search results designed at 40 x 40 */
  icon: string;
  /** Hex code for the Institution's primary color. */
  primaryColor: string;
  /** File path of institution name logo.  For popular banks designed at 160 x 72 */
  tile: string;
  [key: string]: unknown;
}

export const brandingSchema: Schema<Branding> = expandoObject({
  logo: ['logo', string()],
  alternateLogo: ['alternateLogo', string()],
  icon: ['icon', string()],
  primaryColor: ['primaryColor', string()],
  tile: ['tile', string()],
});
