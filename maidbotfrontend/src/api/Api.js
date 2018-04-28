const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'



const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
};

export const doLogin = (payload) =>
    fetch(encodeURI(`${api}/users/login?username=`+payload.username+`&password=`+payload.password), {
        method: 'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {
            headers
        }
    }).then(res => {
            return res.json();
        }).catch(error => {
        console.log("This is error inside dologin");
        return error;
    });

export const checkSession = () =>
    fetch(`${api}/users/check`,{
        method :'GET',
        credentials: 'include',
        mode: 'cors',
        headers: {
            headers
        }
    }).then((res) => {
        return res.json();
    }).catch(error => {
            console.log("This is error.");
            return error;
        });


export const doLogout = ()=>
    fetch(`${api}/users/logout`,{
        method :'POST',
        credentials: 'include',
        mode: 'cors',
        headers: {
            headers
        }
    }).then((res) => {
        return res.status;
    }).catch(error => {
        console.log("This is error.");
        return error;
    });