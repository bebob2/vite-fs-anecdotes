import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    // Array.from({ length: anecdotes.length }, () => 0)
    Array.from({ length: anecdotes.length }, () => 0).reduce(
      (object, element, index) => ({ ...object, [index]: element }),
      {}
    )
  );

  const getBestJoke = (votes) => {
    let bestJoke = { index: 0, votes: 0 };
    for (const [key, value] of Object.entries(votes)) {
      if (value > bestJoke.votes) {
        bestJoke = { index: key, votes: value };
      }
    }
    return anecdotes[bestJoke.index];
  };

  // let votes = Array(anecdotes.length).fill(0);
  return (
    <>
      <h1>World's best JOKES</h1>
      <div>{anecdotes[selected]}</div>
      <div>Votes: {votes[selected]}</div>
      <br />
      <br />
      <button
        onClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
      >
        New Joke
      </button>
      <button
        onClick={() =>
          setVotes(
            // votes.map((vote, index) => (index === selected ? vote + 1 : vote))
            { ...votes, [selected]: votes[selected] + 1 }
          )
        }
      >
        Vote
      </button>
      <h1>Most Vote's</h1>
      <div>{getBestJoke(votes)}</div>
    </>
  );
};

export default App;
