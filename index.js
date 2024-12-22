//var jquery = require('jquery');

const main = function() {
  const host = "./";
  const $views = $('#views');
  const $thumbs = $('#thumbs');
  const $view = $('<img alt=""/>');
  $views.append($view);
  const thumbViewer = function () {
    let choice = $(this).attr('src');
    let title = $(this).attr('title');
    choice = choice.substring(choice.lastIndexOf('/') + 1);
    choice = `${host}views/${choice}`;
    $view.attr({'src': choice, 'title': title});
  };
  $('#thumbs').on('click', 'img', thumbViewer);
};
$(document).ready(main);