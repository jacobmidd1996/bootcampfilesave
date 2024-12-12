// TODO: What does 'this' refer to? global object
console.log(this);

// TODO: What does 'this' refer to? global object
function helloThis() {
  console.log(`Inside this function, this is ${this}`);
}

// TODO: What will this log? refers to object reffered to by variable child
const child = {
  age: 10,
  ageTenYears: function () {
    console.log(this.age + 10);
  },
};

// TODO: What will this log? when i call inves
const investor = {
  name: 'Cash Saver',
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function () {
      console.log(this.initialInvestment * 1.15);
    },
  },
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
