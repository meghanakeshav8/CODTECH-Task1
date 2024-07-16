document.getElementById('saveNoteBtn').addEventListener('click', function() {
    const editor = document.getElementById('editor');
    const noteText = editor.innerHTML.trim();

    if (noteText === "") {
        alert("Please enter a note.");
        return;
    }

    const notesContainer = document.getElementById('notesContainer');
    const noteElement = document.createElement('div');
    noteElement.className = 'note';
    
    noteElement.innerHTML = `
        ${noteText}
        <button class="delete-btn">Delete</button>
    `;

    notesContainer.appendChild(noteElement);
    editor.innerHTML = '';

    noteElement.querySelector('.delete-btn').addEventListener('click', function() {
        notesContainer.removeChild(noteElement);
    });
});

// Drawing functionality
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

let drawing = false;

canvas.addEventListener('mousedown', (e) => {
    drawing = true;
    ctx.moveTo(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false;
    ctx.beginPath();
});

canvas.addEventListener('mouseout', () => {
    drawing = false;
    ctx.beginPath();
});

document.getElementById('clearCanvasBtn').addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Clear editor
document.getElementById('clearEditorBtn').addEventListener('click', function() {
    document.getElementById('editor').innerHTML = '';
});
