export type TLoginData = {
    login: string;
    password: string;  
};

export type TSignupData = {
    first_name: string;
    second_name: string;
    login: string;
    email: string;
    password: string;
    phone: string;
};

export type TUserData = {
    first_name?: string;
    second_name?: string;
    login?: string;
    email?: string;
    password?: string;
    phone?: string;
};

export type TPasswordChange = {
    newPassword: string;
    oldPassword: string;
};

export type TCreateChat = {
    title: string;
};

export type TUsersDataForChat = {
    users: number[];
    chatId: number;
};

export type TDeleteChat = {
    chatId: number;
};

export type TToken = {
    chatId: number;
};
