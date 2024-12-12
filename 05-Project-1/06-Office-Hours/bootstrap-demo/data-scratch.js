const entertainmentSpend = localStorage.getItem("entertainment");
const gasSpend = localStorage.getItem("gas");

const myData = [
  {
    name: 'entertainment',
    y: parseInt(entertainmentSpend),
  },
  {
    name: 'gas',
    y: parseInt(gasSpend)
  },
  {//the other categories, etc.
  }
]