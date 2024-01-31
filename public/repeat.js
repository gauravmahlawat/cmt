document.getElementById("content").addEventListener("input", function() {
    var inputText = this.value;
    var repeatText = repeatInputText(inputText);
    document.getElementById("output").textContent = repeatText;

    updateCharacterCount(inputText);
    updateReadingTime(inputText);
});

document.getElementById("copy").addEventListener("click", function() {
    copyToClipboard(document.getElementById("output"));
});

document.getElementById("download").addEventListener("click", function() {
    downloadTextAsFile(document.getElementById("output").textContent, "repeated_text.txt");
});

function repeatInputText(text) {
    var repeatedText = "";
    for (var i = 0; i < 5; i++) { // Change 5 to the desired repetition count
        repeatedText += text + "\n"; // Add a line break after each repetition
    }
    return repeatedText;
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
