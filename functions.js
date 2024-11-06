/**
 * @param {'td' | 'th'} tagName
 * @param {string} innerHTML
 * @param {HTMLTableRowElement} parent
 * @returns {HTMLTableCellElement}
 */
function createTableCell(tagName, innerHTML, parent) {
    const cell = document.createElement(tagName);
    cell.innerHTML = innerHTML;
    parent.appendChild(cell);
}

/**
 * @param {string} tagName
 * @param {string} id
 * @param {HTMLElement} parent
 */
function createHTMLElement(tagName, id, parent) {
    const cell = document.createElement(tagName);
    cell.id = id;
    parent.appendChild(cell);
}

/**
 * @param {string} tagName -
 * @param {string} childId 
 * @param {string} parentId
 */
function createHTMLElementByParentId(tagName, childId, parentId) {
    const parent = document.getElementById(parentId);
    if (parent != undefined) {
        createHTMLElement(tagName, childId, parent);
    }
}

