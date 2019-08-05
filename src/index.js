goog.provide('boot');
goog.require('example.notes');

/**
 * Entrypoint.
 */
function entrypoint() {
    let noteData = [
        { 'title': 'Example title', 'content': 'Example content' },
        { 'title': 'Example title2', 'content': 'Example content2' }
    ];
    console.log('noteData', noteData);

    const app = document.getElementById('app');
    console.log('app',  app);
    let notes = example.notes.makeNotes(noteData, app);
    console.log('notes', notes);
}

entrypoint();
