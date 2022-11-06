/* eslint-disable */
export type TProfileInput = {
    withoutBorder?: boolean;
    heading: string;
    type: string;
    name: string;
    value: string;
    disabled?: boolean;
    error?: string;
    attributes?: {
        class?: string;
    };
    settings?: {
        witnInternalID?: boolean;
    };
    events?: {
      [N: string]: (event: Event) => void;
    };
};
