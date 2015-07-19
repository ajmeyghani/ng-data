// Utils
(function ($) {
  $.fn.merge = function (o1, o2) {
    var o3 = {};
    for (var key in o1) {o3[key] = o1[key];}
    for (var key in o2) {o3[key] = o2[key];}
    return o3;
  };
  $.fn.contains = function (str, toCheck) {
    return (str.indexOf(toCheck)) !== -1;
  };
  $.fn.isArray = function (k) {
    return Object.prototype.toString.call(k) === "[object Array]"
  };
})(window.$);

// DOM
(function($) {
  $.fn.innerHTML = function (html) {
    this.elm.innerHTML = html;
    return this;
  };
  $.fn.klass = function (klass) {
    this.elm.setAttribute('class', klass);
    return this;
  };
  $.fn.addClass = function (klass) {
    this.elm.classList.add(klass);
    return this;
  };
  $.fn.removeClass = function (klass) {
    this.elm.classList.remove(klass);
    return this;
  };
  $.fn.append = function (node) {
    this.elm.appendChild(node);
    return this;
  };
  $.fn.hasClass = function (className) {
    return [].some.call(this.elm.classList, function (elm) {
      return elm === className;
    });
  };

})(window.$);


