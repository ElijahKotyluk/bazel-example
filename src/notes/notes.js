goog.provide('example.notes');
goog.provide('Note');

goog.require('goog.dom');
goog.require('goog.dom.TagName');
goog.require('goog.ui.Zippy');

const Note = class {
    /**
     *
     * @param {string} title
     * @param {string} content
     * @param {Node | null} noteContainer
     */
    constructor(title, content, noteContainer) {
        this.title = title;
        this.content = content;
        this.parent = noteContainer;
    }

    /**
     *
     * @returns {!goog.ui.Zippy}
     */
    makeNoteDom() {
        const headerElement = goog.dom.createDom(goog.dom.TagName.DIV, { 'style': 'background-color: #0033AA' }, this.title);
        const contentElement = goog.dom.createDom(goog.dom.TagName.DIV, { 'style': 'background-color: #9933BB' }, this.content);
        const newNote = goog.dom.createDom(goog.dom.TagName.DIV, null, headerElement, contentElement);

        goog.dom.appendChild(document.getElementById('app'), newNote);
        return new goog.ui.Zippy(headerElement, contentElement);
    }
};

/**
 *
 * @param {!Array} data
 * @param {Element | null} noteContainer
 * @returns {!Array}
 * @suppress {reportUnknownTypes}
 */
example.notes.makeNotes = (data, noteContainer) => {
    const notesList = [];

    data.forEach((chunk) => {
        console.log('chunk:', chunk);
       const newNote = new Note(chunk.title, chunk.content, noteContainer);
       console.log('newNote:', newNote);
       notesList.push(newNote);
       newNote.makeNoteDom();
    });

    return notesList;
};