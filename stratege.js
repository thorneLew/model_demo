// 策略模式

function PriceStratege() {
  let _stratege = {
    // 满100返30
    return30: function (price) {
      return +price + parseInt(price / 100) * 30;
    },
    return50: function (price) {
      return +price + parseInt(price / 100) * 50;
    },
    percent90: function (price) {
      return (price * 100 * 90) / 10000;
    },
  };

  return function (algorithm, price) {
    return _stratege[algorithm] && _stratege[algorithm](price);
  };
}

const stratege = PriceStratege();

var a;
a = stratege("return30", 91.1);
console.log(a);
a = stratege("return50", 191.1);
console.log(a);
a = stratege("percent90", 191.1);
console.log(a);
