const caseInsensitiveAttributes = {
    autocomplete: ['form'],
    charset: ['meta', 'script'],
    contenteditable: null,
    crossorigin: ['audio', 'img', 'link', 'script', 'video'],
    dir: null,
    draggable: null,
    dropzone: null,
    formmethod: ['button', 'input'],
    inputmode: ['input', 'textarea'],
    kind: ['track'],
    method: ['form'],
    preload: ['audio', 'video'],
    referrerpolicy: ['a', 'area', 'iframe', 'img', 'link'],
    sandbox: ['iframe'],
    spellcheck: null,
    scope: ['th'],
    shape: ['area'],
    sizes: ['link'],
    step: ['input'],
    translate: null,
    type: [
        'a',
        'link',
        'button',
        'embed',
        'object',
        'script',
        'source',
        'style',
        'input',
        'menu',
        'menuitem'
    ],
    wrap: ['textarea']
};

export function onAttrs() {
    return (attrs, node) => {
        const newAttrs = attrs;

        Object.entries(attrs).forEach(([attrName, attrValue]) => {
            if (
                Object.hasOwnProperty.call(caseInsensitiveAttributes, attrName)
                && (
                    caseInsensitiveAttributes[attrName] === null
                    || caseInsensitiveAttributes[attrName].includes(node.tag)
                )
            ) {
                newAttrs[attrName] = attrValue.toLowerCase ? attrValue.toLowerCase() : attrValue;
            }
        });

        return newAttrs;
    };
}
