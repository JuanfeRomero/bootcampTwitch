import { useState } from 'react';

function Statistics({ score }) {
    let total = score.bad + score.good + score.neutral;
    let average = total === 0 ? 0 : (score.good - score.bad) / total;
    let percentage = total === 0 ? 0 : (score.good * 100) / total;

    return (
        <>
            <p>all {total}</p>
            <p>average {average}</p>
            <p>positive {percentage}%</p>
        </>
    );
}

function App() {
    const [score, setScore] = useState({
        good: 0,
        bad: 0,
        neutral: 0,
    });

    const goodScore = () => {
        const newScore = {
            ...score,
            good: score.good + 1,
        };
        setScore(newScore);
    };

    const badScore = () => {
        const newScore = {
            ...score,
            bad: score.bad + 1,
        };
        setScore(newScore);
    };

    const neutralScore = () => {
        const newScore = {
            ...score,
            neutral: score.neutral + 1,
        };
        setScore(newScore);
    };

    return (
        <main>
            <h1>give feedback</h1>
            <button onClick={goodScore}>good</button>
            <button onClick={neutralScore}>neutral</button>
            <button onClick={badScore}>bad</button>
            <h2>statistics</h2>
            <p>good {score.good}</p>
            <p>neutral {score.neutral}</p>
            <p>bad {score.bad}</p>
            <Statistics score={score}/>
        </main>
    );
}

export default App;
