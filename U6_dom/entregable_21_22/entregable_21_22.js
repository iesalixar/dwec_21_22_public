window.onload = inicio;

function inicio() {
  generate_card("titulo1", "sinopsis1");
  generate_card("titulo2", "sinopsis2");
}

function generate_card(titulo, sinopsis) {
  let main = getId("main");
  let div_main = creatElem("div");
  setAtt(div_main, "class", "my-3 p-3 bg-body rounded shadow-sm");
  let h6 = creatElem("h6");
  setAtt(h6, "class", "border-bottom border-gray pb-2 mb-0");
  let h6_txt = creatTxt("Explorar");
  let div_flex = creatElem("div");
  setAtt(div_flex, "class", "d-flex text-muted pt-3");
  let svg = creatElem("svg");
  setAtt(svg, "class", "bd-placeholder-img flex-shrink-0 me-2 rounded");
  setAtt(svg, "width", "32");
  setAtt(svg, "height", "32");
  setAtt(svg, "xmlns", "http://www.w3.org/2000/svg");
  setAtt(svg, "role", "img");
  setAtt(svg, "aria-label", "Placeholder: 32x32");
  setAtt(svg, "preserveAspectRatio", "xMidYMid slice");
  setAtt(svg, "focusable", "false");
  let title = creatElem("title");
  let title_txt = creatTxt("Placeholder");
  let rect = creatElem("rect");
  setAtt(rect, "width", "100%");
  setAtt(rect, "height", "100%");
  setAtt(rect, "fill", "#007bff");
  let text = creatElem("text");
  setAtt(text, "dy", ".3em");
  setAtt(text, "x", "50%");
  setAtt(text, "y", "50%");
  setAtt(text, "fill", "#007bff");
  let text_txt = creatTxt("32x32");

  let div_inner1 = creatElem("div");
  setAtt(div_inner1, "class", "b-3 mb-0 small lh-sm border-bottom w-100");
  let div_inner_flex = creatElem("div");
  setAtt(div_inner_flex, "class", "d-flex justify-content-between");
  let strong = creatElem("strong");
  setAtt(strong, "class", "text-gray-dark");
  let strong_txt = creatTxt(titulo);
  let span = creatElem("span");
  setAtt(span, "class", "d-block");
  let span_txt = creatTxt(sinopsis);
  let button = creatElem("button");
  setAtt(button, "type", "button");
  setAtt(button, "id", "descargar");
  setAtt(button, "class", "btn btn-success float-end");
  let button_txt = creatTxt("Descargar");
  let small = creatElem("small");
  setAtt(small, "class", "d-block text-end mt-3");
  let a_href = creatElem("a");
  setAtt(a_href, "href", "#");
  let a_href_txt = creatTxt("Listado completo");

  main.appendChild(div_main);
  div_main.appendChild(h6);
  h6.appendChild(h6_txt);
  div_main.appendChild(div_flex);
  div_flex.appendChild(svg);
  svg.appendChild(title);
  title.appendChild(title_txt);
  svg.appendChild(rect);
  svg.appendChild(text);
  text.appendChild(text_txt);
  div_flex.appendChild(div_inner1);
  div_inner1.appendChild(div_inner_flex);
  div_inner_flex.appendChild(strong);
  strong.appendChild(strong_txt);
  div_inner_flex.appendChild(span);
  span.appendChild(span_txt);
  div_inner_flex.appendChild(button);
  button.appendChild(button_txt);
  div_inner1.appendChild(small);
  small.appendChild(a_href);
  a_href.appendChild(a_href_txt);
}

function creatElem(e) {
  return document.createElement(e);
}

function getId(id) {
  return document.getElementById(id);
}

function setAtt(e, att, value) {
  e.setAttribute(att, value);
}

function creatTxt(txt) {
  return document.createTextNode(txt);
}
