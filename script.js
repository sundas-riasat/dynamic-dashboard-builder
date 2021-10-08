/* 
*  Dynamic Dashboard Builder Plugin Using Javascript
*
*  Developed by Sundas Riasat
*
*  Note - JQuery, Bootstrap and Chart.js are must to be included in the html file.
*/

$(document).ready(() => {
  var config = null;
  fetch("config.json")
    .then((response) => response.json())
    .then((json) => {
      config = json;
      config = config.sort(function(a, b) {
        return a.priority - b.priority;
      });
      config = config.sort(function (a, b) {
        return a.order - b.order;
      });
      config.forEach((widget => {
        let container = $('.dashboard');
        switch (widget.type) {
          case "pie-chart":
            let pie = createChart(widget.dataset, widget.position, "pie", widget.title);
            container.append(pie);
            break;
          case "bar-chart":
            let bar = createChart(widget.dataset, widget.position, "bar", widget.title);
            container.append(bar);
            break;
          case "line-chart":
            let line = createChart(widget.dataset, widget.position, "line", widget.title);
            container.append(line);
            break;
          case "polararea-chart":
            let polar = createChart(widget.dataset, widget.position, "polararea", widget.title);
            container.append(polar);
            break;
          case "html":
            let html = createHtmlElement(
              widget.dataset,
              widget.position,
            );
            container.append(html);
            break;
        }
      }))
    });
});

function createChart(dataset, position, type, title) {
  let canvas = document.createElement("canvas");
  canvas.id = "pie-chart";
  let ctx = canvas.getContext("2d");
  let chart = new Chart(ctx, {
    type: type,
    data: dataset,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
  let wrapper = createNewWrapper(position, title);
  wrapper.appendChild(canvas);
  return wrapper;
}

function createHtmlElement(html, position, title) {
  let element = document.createElement("div");
  element.innerHTML = html;
  let wrapper = createNewWrapper(position, title);
  wrapper.appendChild(element);
  return wrapper;
}

function createNewWrapper(position, title){
  let card = document.createElement("div");
  card.className = "col card m-2 p-3";
  card.style.minWidth = position.width + "px";
  if (title && title !== "") {
    card.innerHTML = `<div class="card-header mb-3"><h3>${title}</h3></div>`;
  }
  return card;
}