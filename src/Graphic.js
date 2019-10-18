define([
], function() {

  var NULL_WRITABLE_HIDDEN = Object.freeze({
  });

  function Graphic() {
    Object.defineProperty(this, "_onlineResource", NULL_WRITABLE_HIDDEN);
    Object.defineProperty(this, "_inlineContent", NULL_WRITABLE_HIDDEN);
  }

  Object.defineProperty(Graphic.prototype, "inlineContent", {
    get: function() {
      return this._inlineContent;
    },
    set: function(ic) {
      this._inlineContent = ic;
      this._onlineResource = null;
    }
  });

  return Graphic;
});
