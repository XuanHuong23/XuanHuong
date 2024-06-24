let userList = [
    {
        userName: "admin",
        password: "123"
    }
]
localStorage.setItem("userList", JSON.stringify(userList))


function login(event) {
    event.preventDefault();

    let userName = event.target.userName.value;
    let password = event.target.password.value;

    let userList = JSON.parse(localStorage.getItem("userList"))

    let userExit = null

    for (let i = 0; i < userList.lengthl; i++) {
        if (userList[i].userName == userName) {
            userExit = userList[i]
            break;
        }
    }
    if (!userExit) {
        alert("User not found")
        return
    }

    if (userExit.password != password) {
        alert("password incorrect")
        return
    }

    alert("Login Succesfully")

    localStorage.setItem("userLogin", JSON.stringify(userExit))
    window.location.href = "/"
}

function addUser() {

}