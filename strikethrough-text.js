document.getElementById("content").addEventListener("input", function() {
    var inputText = this.value;
    var output = convertToStrikethrough(inputText);
    document.getElementById("output").textContent = output;

    updateCharacterCount(inputText);
    updateReadingTime(inputText);
});

document.getElementById("copy").addEventListener("click", function() {
    copyToClipboard(document.getElementById("output"));
});

document.getElementById("download").addEventListener("click", function() {
    downloadTextAsFile(document.getElementById("output").textContent, "strikethrough.txt");
});

function convertToStrikethrough(text) {
    return text
        .split("")
        .map(function(char) {
            if (char !== " ") {
                return char + "\u0336"; // Add the U+0336 combining character
            }
            return char;
        })
        .join("");
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
    var range = document.createRange();
    range.selectNode(element);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

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
