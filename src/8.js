class Elem {
  constructor(selector) {
    this.elem = document.querySelector(`${selector}`);
  }

  html(content) {
    this.elem.textContent = content;
    return this;
  }

  append(content) {
    this.elem.textContent = `${content} ${this.elem.textContent}`;
    return this;
  }

  prepend(content) {
    this.elem.textContent = `${this.elem.textContent} ${content}`;
    return this;
  }

  attr(atr, content) {
    this.elem.setAttribute(`${atr}`, `${content}`);
    return this;
  }
}

const elem = new Elem('p');

// elem.html('!')
// elem.append('!')
// elem.prepend('!')
// elem.attr('class', 'www')

elem.html('hello').append('!').prepend('!');
elem.attr('class', 'www').attr('title', 'hello');
