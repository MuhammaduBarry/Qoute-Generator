// this is our elements that we are going to manipulate
let qoute = document.querySelector("#qoute");
let author = document.querySelector("#author");
let button = document.querySelector("#main-button");

// this is our array of qoutes and author

const qoutesArr = [

  {
    "qoutes": "Nothing is impossible, the word itself says 'I'm possible'!",
    "authors": "Audrey Hepburn",
  },
  {
    "qoutes": "As you grow older, you will discover that you have two hands, one for helping yourself, the other for helping others.",
    "authors": "Audrey Hepburn",
  },
  {
    "qoutes": "I never think of myself as an icon. What is in other people's minds is not in my mind. I just do my thing.",
    "authors": "Audrey Hepburn",
  },
  {
    "qoutes": "The best thing to hold onto in life is each other.",
    "authors": "Audrey Hepburn",
  },
  {
    "qoutes": "Be nice to nerds. Chances are you'll end up working for one.",
    "authors": "Bill Gates",
  },
  {
    "qoutes": "Your most unhappy customers are your greatest source of learning.",
    "authors": "Bill Gates",
  },
  {
    "qoutes": "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
    "authors": "Bill Gates",
  },
  {
    "qoutes": "Life is not fair; get used to it.",
    "authors": "Bill Gates",
  },
  {
    "qoutes": "If you can't make it good, at least make it look good.",
    "authors": "Bill Gates",
  },
  {
    "qoutes": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "authors": "Albert Einstein",
  },
  {
    "qoutes": "Nearly all men can stand adversity, but if you want to test a man’s character, give him power.",
    "authors": "Abraham Lincoln",
  },
  {
    "qoutes": "The best way to predict your future is to create it.",
    "authors": "Abraham Lincoln",
  },
  {
    "qoutes": "I would rather be a little nobody, then to be a evil somebody.",
    "authors": "Abraham Lincoln",
  },
  {
    "qoutes": "I will prepare and some day my chance will come.",
    "authors": "Abraham Lincoln",
  },
  {
    "qoutes": "Important principles may, and must, be inflexible.",
    "authors": "Abraham Lincoln",
  },
  {
    "qoutes": "Tact is the ability to describe others as they see themselves.",
    "authors": "Abraham Lincoln",
  },
  {
    "qoutes": "You cannot escape the responsibility of tomorrow by evading it today.",
    "authors": "Abraham Lincoln",
  },
  {
    "qoutes": "Knowing thyself, that is the greatest wisdom.",
    "authors": "Galileo Galilei",
  },
  {
    "qoutes": "To be humane, we must ever be ready to pronounce that wise, ingenious and modest statement 'I do not know'.",
    "authors": "Galileo Galilei",
  },
  {
    "qoutes": "Two truths cannot contradict one another.",
    "authors": "Galileo Galilei",
  },
  {
    "qoutes": "Where the senses fail us, reason must step in.",
    "authors": "Galileo Galilei",
  },
  {
    "qoutes": "All truths are easy to understand once they are discovered; the point is to discover them.",
    "authors": "Galileo Galilei",
  }
];

// this is where we are going to write our function to create the random generator
//  basically how this function works is that Math.random gives us a number between 0 and 1
// then you multiply it by the array of objects length which will give us a number
//  then Math.floor rounds it down to a interger
// so basically the random variable is a number and just like arrays
// we add [] and insert a index number to recieve its value.


const RandomGenerator = (e) => {
  if (e.target === button) {
    let random = Math.floor(Math.random() * qoutesArr.length);
    qoute.innerText = qoutesArr[random].qoutes;
    author.innerText = qoutesArr[random].authors;
  }
}
button.addEventListener("click", RandomGenerator);
