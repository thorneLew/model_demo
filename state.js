// 状态模式

function MarryState() {
  let _currState = {};

  let _state = {
    move: function () {
      console.log("move");
    },
    jump: function () {
      console.log("jump");
    },
    stop: function () {
      console.log("stop");
    },
  };

  function change() {
    _currState = {};

    for (let index = 0; index < arguments.length; index++) {
      const key = arguments[index];
      _currState[key] = true;
    }
    return this;
  }

  function run() {
    console.log("执行一次");
    for (const key in _currState) {
      _state[key] && _state[key]();
    }
    return this;
  }

  return {
    change,
    run,
  };
}

const marry = new MarryState();

marry
  .change("move")
  .run()
  .change("move", "jump")
  .run()
  .run()
  .change("stop", "move")
  .run();
