const defaultObj = {
    tagName: "div",
    text: ""
};


function render(args, parentNode) {
    let { tagName, children, text, html, attrs } = {
        ...defaultObj,
        ...args
    };

    let newElement = document.createElement(tagName);

    // console.log(newElement);
    if (Array.isArray(children)) {
        children.forEach(item => {
            // console.log(item);
            // console.log(newElement);
            render(item, newElement);
        });
    }
    {
        html !== undefined
            ? (newElement.innerHTML = html)
            : (newElement.innerText = text);

        for (let key in attrs) {
            if (attrs.hasOwnProperty(key)) {
//                alert(key + ":" + attrs[key]);
                newElement.setAttribute(key, attrs[key]);
            }
        }
    }
    parentNode.appendChild(newElement);
    return newElement;
}

