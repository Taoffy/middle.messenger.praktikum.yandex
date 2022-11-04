/* eslint-disable */
export enum EVENTS {
    INIT = "init",
    FLOW_CDM = "flow:component-did-mount",
    FLOW_CDU = "flow:component-did-update",
    FLOW_RENDER = "flow:render"
};

export type TRecordProps<T> = {[N: string]: T};

export type TObjectEvents = {[N: string]: {[N:string]: () => void}};
