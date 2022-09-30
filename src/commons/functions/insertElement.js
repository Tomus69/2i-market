export default function insertElement(tag, className, parent) {
    const el = document.createElement(tag);
    el.setAttribute('class', className);
    parent.appendChild(el);
    return el;
}