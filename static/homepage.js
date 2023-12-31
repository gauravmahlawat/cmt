document.getElementById("sentence").addEventListener("click", function() {
    var contentElement = document.getElementById("content");
    var content = contentElement.value;

    var sentenceCase = toSentenceCase(content);

    contentElement.value = sentenceCase;
});

function toSentenceCase(text) {
    return text.replace(/(^\w{1}|\.\s*\w{1})/gi, function(match) {
        return match.toUpperCase();
    });
}

document.getElementById("clear").addEventListener("click", function(e) {
    e.preventDefault();

    var content = document.getElementById("content");
    
    content.value = "";
    content.placeholder = content.placeholder.toLowerCase();
    
    return false;
});

document.getElementById("lower").addEventListener("click", function() {
    var contentElement = document.getElementById("content");
    var content = contentElement.value;

    var lowercaseText = content.toLowerCase();

    contentElement.value = lowercaseText;
});

document.getElementById("upper").addEventListener("click", function() {
    var contentElement = document.getElementById("content");
    var content = contentElement.value;

    var uppercaseText = content.toUpperCase();

    contentElement.value = uppercaseText;
});


document.getElementById("capitalized").addEventListener("click", function() {
    var contentElement = document.getElementById("content");
    var content = contentElement.value;

    var capitalizedText = toCapitalizedCase(content);

    contentElement.value = capitalizedText;
});

function toCapitalizedCase(text) {
    return text.replace(/\b\w+/g, function(match) {
        return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
    });
}

document.getElementById("alternating").addEventListener("click", function() {
    var contentElement = document.getElementById("content");
    var content = contentElement.value;

    var alternatingText = toAlternatingCase(content);

    contentElement.value = alternatingText;
});

function toAlternatingCase(text) {
    var alternatingText = '';
    var toUpperCase = true;

    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        
        if (toUpperCase) {
            alternatingText += char.toUpperCase();
        } else {
            alternatingText += char.toLowerCase();
        }

        toUpperCase = !toUpperCase;
    }

    return alternatingText;
}

function toTitleCase(text) {
    return text.replace(/\b\w+/g, function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
}

window.onload = function() {
    var titleElement = document.getElementById("title");
    var contentElement = document.getElementById("content");

    titleElement.addEventListener("click", function() {
        var content = contentElement.value;
        var titleCaseText = toTitleCase(content);
        contentElement.value = titleCaseText;
    });
};

document.getElementById("inverse").addEventListener("click", function() {
    var contentElement = document.getElementById("content");
    var content = contentElement.value;

    var inverseText = toInverseCase(content);

    contentElement.value = inverseText;
});

function toInverseCase(text) {
    var inverseText = '';

    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        
        if (char === char.toLowerCase()) {
            inverseText += char.toUpperCase();
        } else {
            inverseText += char.toLowerCase();
        }
    }

    return inverseText;
}

document.getElementById("copy").addEventListener("click", function() {
    var contentElement = document.getElementById("content");
    var content = contentElement.value.trim();  // Trim whitespace

    if (content === "") {
        showMessage("Please enter some text first!", "error");
        return;
    }

    if (copyToClipboard(content)) {
        showMessage("Copied to clipboard successfully.", "success");
    } else {
        showMessage("Failed to copy to clipboard. Your browser may not support this feature.", "error");
    }
});

function copyToClipboard(text) {
    try {
        navigator.clipboard.writeText(text);
        return true;
    } catch (err) {
        return false;
    }
}

function showMessage(message, type) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.className = "message " + type;

    setTimeout(function() {
        clearMessage();
    }, 3000);
}

function clearMessage() {
    var messageElement = document.getElementById("message");
    messageElement.textContent = "";
    messageElement.className = "message";
}

document.getElementById("download").addEventListener("click", function() {
    var content = document.getElementById("content").value;
    
    var blob = new Blob([content], { type: "text/plain" });
    var url = URL.createObjectURL(blob);
    
    var link = document.createElement("a");
    link.href = url;
    link.download = "text_file.txt";
    document.body.appendChild(link);
    
    link.click();
    
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
});
