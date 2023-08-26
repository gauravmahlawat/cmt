function detailChar () {
    const contentElement = document.getElementById("content");
    const charCountElement = document.getElementById("char_count");
    const wordCountElement = document.getElementById("word_count");
    const lineCountElement = document.getElementById("line_count");
    

    if(charCountElement) {
        contentElement.addEventListener("input", updateCounts);
        
        function updateCounts() {
            const content = contentElement.value;
            const charCount = content.length;
            const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
            const lineCount = (content.match(/\n/g) || []).length + 1; // Count newline occurrences
        
            charCountElement.textContent = charCount;
            wordCountElement.textContent = wordCount;
            lineCountElement.textContent = lineCount;
        }

        updateCounts(); // Initial count update
    }
}

detailChar ();

function readingTime() {
    const contentElement = document.getElementById("content");
    const charCountElement = document.getElementById("char_count");
    const wordCountElement = document.getElementById("word_count");
    const lineCountElement = document.getElementById("line_count");
    const readingTimeElement = document.getElementById("reading_time");

    const WORDS_PER_MINUTE = 200; // Average reading speed in words per minute

    if(readingTimeElement) {
        contentElement.addEventListener("input", updateCountsAndReadingTime);

        function updateCountsAndReadingTime() {
            const content = contentElement.value;
            const charCount = content.length;
            const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
            const lineCount = (content.match(/\n/g) || []).length + 1;
            const readingTime = Math.ceil(wordCount / WORDS_PER_MINUTE);

            charCountElement.textContent = charCount;
            wordCountElement.textContent = wordCount;
            lineCountElement.textContent = lineCount;
            readingTimeElement.textContent = readingTime;
        }

        updateCountsAndReadingTime(); // Initial count update
    }
}

readingTime();

document.addEventListener("DOMContentLoaded", function() {
    const headerMenu = document.querySelector(".mobile-buttons");
    const headerMenuItem = document.querySelector(".header-menu");

    headerMenu.addEventListener("click", function() {
        headerMenuItem.classList.toggle("is-active");
    });

    const mobileNavButton = document.querySelector(".mobile-nav-button");

    mobileNavButton.addEventListener("click", function() {
        const isExpanded = this.getAttribute("aria-expanded") === "false";
        this.setAttribute("aria-expanded", isExpanded);
    });

    const expandMobileNavButtons = document.querySelectorAll(".primary-nav__button-toggle");
    const mobileShowMenus = document.querySelectorAll(".header-menu--level-1 ul");

    expandMobileNavButtons.forEach((button, index) => {
        button.addEventListener("click", function() {
            const isExpanded = this.getAttribute("aria-expanded") === "false";
            this.setAttribute("aria-expanded", isExpanded);
            console.log('ss')
            mobileShowMenus[index].classList.toggle("is-active");
        });
    });

});

