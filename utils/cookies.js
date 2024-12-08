import Cookies from 'js-cookie';


export const saveLoginToken = (token, userId) => {
    Cookies.set('loginToken', token, { expires: 14 });
    Cookies.set('userId', userId, { expires: 14 });
}

export const getLoginToken = () => {
    return Cookies.get('loginToken');
}


export const removeUserToken = () => {
    Cookies.remove('loginToken');
}

