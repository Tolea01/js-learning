const data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },

    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

const createTree = (htmlElement, object) => {
    const ul = document.createElement('ul');
    for (let key in object) {
        const li = document.createElement('li');
        li.textContent = key;
        ul.appendChild(li);
        if (Object.keys(object[key]).length > 0) {
            createTree(li, object[key])
        }
    }
    htmlElement.append(ul);
}

const container = document.querySelector('#container');
createTree(container, data);