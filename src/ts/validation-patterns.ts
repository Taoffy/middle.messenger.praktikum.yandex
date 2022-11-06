/* eslint-disable */
export const validationPatterns = {
    namesPattern: /^[A-ZА-Я][a-zа-я]*(-[A-ZА-Я][a-zа-я]*)?$/,
    loginPattern: /^[A-Za-z\-_]{3,20}$/,
    emailPattern: /^[\w\d\-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    passwordPattern: /(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z!@#$%^&*()_\-+=[\]?.,]{8,40}$/,
    phonePattern: /^\+?[0-9]{10,15}$/,
};
