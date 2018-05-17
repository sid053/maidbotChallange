export function login(userdata) {
    console.log(userdata);
    return {
        type : 'LOGIN',
        payload : userdata
    }
};

export function message(userdata) {
    console.log(userdata);
    return{
        type : 'MESSAGE',
        payload:userdata
    }

}
export function logout() {
    return{
        type : 'LOGOUT'
    }
}
