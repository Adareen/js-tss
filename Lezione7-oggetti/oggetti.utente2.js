let user={
    username: "stellina49", 
    password: "1235",
    citta: "torino",
    status: "offline",
    accesso: false,

    doLogin(){
        this.status="online";
        this.accesso=true;
        console.log("login has been set: "+ this.status);

    },

    doLogout(){
        this.status="offline";
        this.accesso=false;
        console.log("logout-> bye. has been † rip: "+ this.status);

    },
}


user.doLogin();
console.log(user.status);

user.doLogout();
console.log(user.status);