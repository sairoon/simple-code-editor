/*
const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const jsEditor = document.getElementById("js-editor");
const outputFrame = document.getElementById("output-frame");

function updateOutput() {
    const htmlCode = htmlEditor.value;
    const cssCode = "<style>" + cssEditor.value + "</style>";
    const jsCode = "<script>" + jsEditor.value + "</script>";
    const combinedCode = htmlCode + cssCode + jsCode;

    const doc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    doc.open();
    doc.write(combinedCode);
    doc.close();
}

htmlEditor.addEventListener("input", updateOutput);
cssEditor.addEventListener("input", updateOutput);
jsEditor.addEventListener("input", updateOutput);

updateOutput();
*/


const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const jsEditor = document.getElementById("js-editor");
const outputFrame = document.getElementById("output-frame");

function updateOutput() {
    const htmlCode = htmlEditor.value;
    const cssCode = "<style>" + cssEditor.value + "</style>";
    const jsCode = "<script>" + jsEditor.value + "</script>";
    const combinedCode = htmlCode + cssCode + jsCode;

    const doc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    doc.open();
    doc.write(combinedCode);
    doc.close();
}

htmlEditor.addEventListener("input", updateOutput);
cssEditor.addEventListener("input", updateOutput);
jsEditor.addEventListener("input", updateOutput);

htmlEditor.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
        const start = htmlEditor.selectionStart;
        const end = htmlEditor.selectionEnd;
        const currentValue = htmlEditor.value;

        // Insert a snippet when '!' is typed and immediately followed by Tab
        if (currentValue.slice(start - 1, end) === "!") {
            const snippet = "<!DOCTYPE html>\n<html>\n<head>\n\t<title></title>\n</head>\n<body>\n\t\n</body>\n</html>";
            htmlEditor.value = currentValue.slice(0, start - 1) + snippet + currentValue.slice(end);
            htmlEditor.setSelectionRange(start + 9, start + 20); // Set the cursor inside the <title> tag
            updateOutput();
        }
    }
});

updateOutput();



/*

const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const jsEditor = document.getElementById("js-editor");
const outputFrame = document.getElementById("output-frame");

function updateOutput() {
    const htmlCode = htmlEditor.value;
    const cssCode = "<style>" + cssEditor.value + "</style>";
    const jsCode = "<script>" + jsEditor.value + "</script>";
    const combinedCode = htmlCode + cssCode + jsCode;

    const doc = outputFrame.contentDocument || outputFrame.contentWindow.document;
    doc.open();
    doc.write(combinedCode);
    doc.close();
}

htmlEditor.addEventListener("input", updateOutput);
cssEditor.addEventListener("input", updateOutput);
jsEditor.addEventListener("input", updateOutput);

htmlEditor.addEventListener("keydown", function (e) {
    if (e.key === "Tab") {
        e.preventDefault();
        const start = htmlEditor.selectionStart;
        const end = htmlEditor.selectionEnd;
        const currentValue = htmlEditor.value;

        // Insert a snippet when '!' is typed and immediately followed by Tab
        if (currentValue.slice(start - 1, end) === "!") {
            const snippet = "<!DOCTYPE html>\n<html>\n<head>\n\t<title></title>\n</head>\n<body>\n\t\n</body>\n</html>";
            htmlEditor.value = currentValue.slice(0, start - 1) + snippet + currentValue.slice(end);
            htmlEditor.setSelectionRange(start + 9, start + 20); // Set the cursor inside the <title> tag
            updateOutput();
        }
    }
});

// Function to highlight HTML tags
function highlightHtmlTags() {
    const code = htmlEditor.value;
    const highlightedCode = code.replace(/<[^>]+>/g, match => {
        return `<span class="html-tag">${match}</span>`;
    });

    htmlEditor.innerHTML = highlightedCode;
}

htmlEditor.addEventListener("input", highlightHtmlTags);

updateOutput();
*/

