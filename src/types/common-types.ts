/* eslint-disable */
export type Indexed<T = any> = {
    [key in string]: T;
};

export type TResponse = {
    [N: string]: string|number|JSON;
};

export type TChatObject = {
    id: number;
    title: string;
    avatar?: string;
    unread_count: number;
    last_message?: {
      user: {
        first_name: string;
        second_name: string;
        avatar?: string;
        email: string;
        login: string;
        phone: string;
      };
      time: string;
      content: string;
    };
};

export type TUser = {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string|null;
    login: string;
    email: string;
    phone: string;
    avatar: string|null;
}|Record<string, never>;
