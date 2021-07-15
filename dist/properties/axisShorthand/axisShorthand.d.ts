/** grid-row and grid-column properties
 *
 * supports:
 * grid-column: 1;
 * grid-column: 1 / span 2;
 * grid-column: 1 / 3;
 *
 * does not support:
 * grid-column: 1 / -1;
 */
export declare const axisShorthand: (name: string, value: string) => string;
