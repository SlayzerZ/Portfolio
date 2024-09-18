function notLow(message) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]
    let z = 0
    while (z !== alphabet.length) {
        if (message === alphabet[z]) {
            return true;
        } else {
            z += 1
        }
    }
    return false
}

export function compose() {
    // Add event listener on keydown
    document.addEventListener('keydown', (event) => {
        var name = event.key;
        var code = event.code;
        // alert(`Key pressed ${name} \r\n Key code value: ${code}`)
        // Alert the key name and key code on keydown
        let e = notLow(name);
        // console.log(e);
        if (name !== "Backspace") {
            if (name !== "Escape") {
                if (e) {
                    const keyNode = document.createElement("div");
                    keyNode.style.backgroundColor = generateColor();
                    keyNode.id = code;
                    keyNode.className = 'note'
                    keyNode.innerText = name
                    document.body.append(keyNode);
                }
            } else {
                const bricks = document.querySelectorAll('div')
                let z = 0
                while (z !== bricks.length) {
                    bricks[z].remove()
                    z += 1
                }
            }
        } else if (name === "Backspace") {
            const bricks = document.querySelectorAll('div')
            bricks[bricks.length - 1].remove()
        }
    }, false);

}

function logMessage(message) {
    consoleLog.innerHTML += `${message}<br>`;
}

function generateColor() {
    let color = '#'
    return color += Math.random().toString(16).slice(2, 8).toUpperCase();
}