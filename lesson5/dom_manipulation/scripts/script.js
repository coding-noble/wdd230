// Get Elements
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Add Event Listener for Add Button
button.addEventListener("click", () => {
    if (input.value !== "") {
        let li = document.createElement("li");
        let remove = document.createElement("button");
        li.textContent = input.value;
        remove.textContent = "❌";
        li.append(remove);
        list.appendChild(li);
        remove.addEventListener("click", () => {
            list.removeChild(li);
        });
        input.focus();
        input.removeAttribute("placeholder");
        input.removeAttribute("value");
        input.value = ""
    }
});