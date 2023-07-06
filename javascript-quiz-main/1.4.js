const object = {};

const handler = {
  get: function(target, property) {
    return "404";
  }
};

const proxy = new Proxy(object, handler);