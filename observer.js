function ObserverFactory() {
  let _message = {};

  return {
    register: function (type, fn) {
      if (typeof _message[type] === "undefined") {
        _message[type] = [fn];
        return;
      }
      _message[type].push(fn);
    },
    send: function (type, args) {
      if (!_message[type]) {
        return;
      }

      let events = {
        type,
        args: args || {},
      };

      for (let index = 0; index < _message[type].length; index++) {
        _message[type][index].call(this, events);
      }
    },
    remove: function (type, fn) {
      if (_message[type] instanceof Array) {
        var i = _message[type].length - 1;

        for (; i >= 0; i--) {
          _message[type][i] === fn && _message[type].splice(i, 1);
        }
      }
    },
  };
}

const observer = ObserverFactory();
const hahahF = function (res) {
  console.log(res);
};

observer.register("hahah", hahahF);
observer.register("ts", function (res) {
  console.log("---");
  console.log(res);
});

observer.send("hahah", { name: "小明" });
observer.remove("hahah", hahahF);
observer.send("hahah", { name: "小明1" });
observer.send("hahah", { name: "小明2" });
observer.send("ts", { name: "typescript" });
