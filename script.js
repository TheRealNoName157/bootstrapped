// ── Hardcoded credentials ──────────────────────────
const CORRECT = {
    name:    "john",
    surname: "doe",
    date:    "2000-01-01",
    email:   "john@hack.net"
};

const REDIRECT_URL = "tips.html";
// ──────────────────────────────────────────────────

// Toggle links
const toggleBtn = document.getElementById("btn");
const links = document.querySelectorAll(".link-toggle");
let linksVisible = true;

toggleBtn.addEventListener("click", function () {
    linksVisible = !linksVisible;
    links.forEach(link => {
        link.classList.toggle("hidden", !linksVisible);
    });
    toggleBtn.textContent = linksVisible ? "// hide links //" : "// show links //";
});

// Form validation + redirect
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name    = document.getElementById("name").value.trim();
    const surname = document.getElementById("surname").value.trim();
    const date    = document.getElementById("date").value;
    const email   = document.getElementById("email").value.trim();

    // ── DEBUG: open browser console (F12) to see these ──
    console.log("name:   ", JSON.stringify(name),    " | expected:", JSON.stringify(CORRECT.name));
    console.log("surname:", JSON.stringify(surname), " | expected:", JSON.stringify(CORRECT.surname));
    console.log("date:   ", JSON.stringify(date),    " | expected:", JSON.stringify(CORRECT.date));
    console.log("email:  ", JSON.stringify(email),   " | expected:", JSON.stringify(CORRECT.email));
    // ────────────────────────────────────────────────────

    if (
        name    === CORRECT.name    &&
        surname === CORRECT.surname &&
        date    === CORRECT.date    &&
        email   === CORRECT.email
    ) {
        window.location.href = REDIRECT_URL;
    } else {
        showError("// ACCESS DENIED //");
    }
});

function showError(msg) {
    let err = document.getElementById("login-error");
    if (!err) {
        err = document.createElement("p");
        err.id = "login-error";
        err.style.textAlign = "center";
        err.style.marginTop = "12px";
        err.style.color = "rgb(1, 215, 5)";
        err.style.textShadow = "0 0 8px rgb(1, 215, 5)";
        err.style.fontFamily = "inherit";
        form.after(err);
    }
    err.textContent = msg;

    const card = document.querySelector(".hack-card");
    card.style.transition = "box-shadow 0.1s";
    card.style.boxShadow = "0 0 20px red, 0 0 40px rgba(255,0,0,0.15)";
    setTimeout(() => {
        card.style.boxShadow = "";
    }, 600);
}
