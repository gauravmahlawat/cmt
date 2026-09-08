// Binary code mappings for each character
const binaryCodeMap = {
    a: "01100001", b: "01100010", c: "01100011", d: "01100100", e: "01100101", f: "01100110",
    g: "01100111", h: "01101000", i: "01101001", j: "01101010", k: "01101011", l: "01101100",
    m: "01101101", n: "01101110", o: "01101111", p: "01110000", q: "01110001", r: "01110010",
    s: "01110011", t: "01110100", u: "01110101", v: "01110110", w: "01110111", x: "01111000",
    y: "01111001", z: "01111010",
    "1": "00110001", "2": "00110010", "3": "00110011", "4": "00110100", "5": "00110101",
    "6": "00110110", "7": "00110111", "8": "00111000", "9": "00111001", "0": "00110000",
    " ": "00100000"
};

document.getElementById("content").addEventListener("input", function() {
    var inputText = this.value.toLowerCase();
    var binaryCode = generateBinaryCode(inputText);
    document.getElementById("output").textContent = binaryCode;

    updateCharacterCount(inputText);
    updateReadingTime(inputText);
});

document.getElementById("copy").addEventListener("click", function() {
    copyToClipboard(document.getElementById("output"));
});

document.getElementById("download").addEventListener("click", function() {
    downloadTextAsFile(document.getElementById("output").textContent, "binary_code.txt");
});

function generateBinaryCode(text) {
    var binaryCode = "";
    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        if (binaryCodeMap[char]) {
            binaryCode += binaryCodeMap[char] + " ";
        } else {
            binaryCode += char;
        }
    }
    return binaryCode.trim();
}

function updateCharacterCount(text) {
    document.getElementById("char_count").textContent = text.length;
}

function updateReadingTime(text) {
    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordsPerMinute = 200; // Adjust as needed
    const timeInMinutes = Math.ceil(words.length / wordsPerMinute);
    document.getElementById("reading_time").textContent = timeInMinutes;
}

function copyToClipboard(element) {
    var hiddenTextarea = document.createElement("textarea");
    hiddenTextarea.value = element.innerText;
    document.body.appendChild(hiddenTextarea);
    hiddenTextarea.select();
    document.execCommand("copy");
    document.body.removeChild(hiddenTextarea);

    showMessage("Copied to clipboard!", "success");
}

function downloadTextAsFile(text, filename) {
    var blob = new Blob([text], { type: "text/plain" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
    showMessage("Downloaded!", "success");
}

function showMessage(message, type) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.className = "messages message " + type;
    setTimeout(function() {
        messageElement.textContent = "";
        messageElement.className = "messages message";
    }, 5000);
}
