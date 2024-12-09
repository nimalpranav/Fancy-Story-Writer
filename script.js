// Format text in the editor
function formatText(command) {
  document.execCommand(command, false, null);
}

// Clear the editor
function clearText() {
  const editor = document.getElementById("editor");
  if (confirm("Are you sure you want to clear your story?")) {
    editor.innerHTML = "";
    updateWordCount();
  }
}

// Save story to local storage
function saveStory() {
  const editorContent = document.getElementById("editor").innerHTML;
  localStorage.setItem("story", editorContent);
  alert("Story saved successfully!");
}

// Load story from local storage
function loadStory() {
  const savedStory = localStorage.getItem("story");
  if (savedStory) {
    document.getElementById("editor").innerHTML = savedStory;
    updateWordCount();
  } else {
    alert("No story found in storage!");
  }
}

// Export story as PDF
function exportPDF() {
  const editorContent = document.getElementById("editor").innerHTML;
  const storyText = editorContent.replace(/<[^>]*>/g, ""); // Remove HTML tags
  const pdfWindow = window.open("", "_blank");
  pdfWindow.document.write(`
    <html>
    <head><title>Your Story</title></head>
    <body><pre>${storyText}</pre></body>
    </html>
  `);
  pdfWindow.document.close();
  pdfWindow.print();
}

// Update word count
function updateWordCount() {
  const editorContent = document.getElementById("editor").innerText;
  const wordCount = editorContent.trim().split(/\s+/).filter(word => word).length;
  document.getElementById("word-count").textContent = `Words: ${wordCount}`;
}

// Set theme
function setTheme(theme) {
  document.body.className = theme;
}
// Delete the story from local storage
function deleteStory() {
  if (confirm("Are you sure you want to delete your saved story?")) {
    localStorage.removeItem("story");
    alert("Saved story deleted successfully!");
  }
}
