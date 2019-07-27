
goog.provide('boot');
goog.require('goog.dom.TagName');


/**
 * Entrypoint.
 */
function entrypoint() {
    console.log('dom', goog.dom.TagName.DIV.toString());
}

entrypoint();
