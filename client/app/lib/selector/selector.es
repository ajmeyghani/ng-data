var minapp; var $;
minapp = function (o) {
  this.version = '1.0.0';
  if (!o) {
    return this;
  } else if(typeof o === 'string' &&  o[0] !== '.' && o[0] !== '#' ) {
    var elm = document.createElement(o);
    return $(elm);
  } else if(typeof o === 'string' && o[0] === '#') {
    var elm = document.getElementById(o.replace("#", ""));
    return $(elm);
  } else if(typeof o === 'string' && o[0] === '.') {
    var elm = document.getElementsByClassName(o.replace('.', ''));
    return $([].slice.call(elm));
  } else {
    var f = this.isArray(o)  ? 'elms' : 'elm';
    this[f] = o;
    return this;
  }
};
$ = function(o) { return new minapp(o);};

// expose fn jq style.
$.fn = minapp.prototype = {};


module.exports = $;



