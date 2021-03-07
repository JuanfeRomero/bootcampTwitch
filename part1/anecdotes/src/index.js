import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0);

    const anotherAnecdote = () => {
        let current = selected;
        while (current === selected) {
            current = Math.floor(Math.random() * anecdotes.length);
        }
        setSelected(current);
    };

    const [votes, setVotes] = useState(Object.fromEntries(anecdotes.map((value, index) => [index, 0])));

    const upVote = () => {
            let up = votes[selected] + 1;
            setVotes({
                ...votes,
                [selected]: up,
            });
    };

    const mostVoted = () => {
      let sortedVotes = [];
      for(let key in votes){
        sortedVotes.push([key, votes[key]])
      }

      sortedVotes.sort((a, b) =>  b[1]-a[1])

      return sortedVotes[0][0];
    }

    return (
        <div>
          <h1>Anecdote of the day</h1>
            <p>{anecdotes[selected]}</p>
            <p>
                has {votes[selected] === undefined ? 0 : votes[selected]} votes
            </p>
            <button onClick={upVote}>vote +</button>
            <button onClick={anotherAnecdote}>another anecdote</button>

            <h2>Anecdote with most votes</h2>
            <p>{anecdotes[mostVoted()]}</p>
        </div>
    );
};

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
