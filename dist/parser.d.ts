import { StylisPlugin } from 'styled-components';
export declare type GriddieFunction = (property: string) => ReturnType<StylisPlugin>;
export declare type GridPropertiesObject = {
    [key: string]: string;
};
export declare const parseGridProperties: GriddieFunction;
