import { useState } from 'react';

function Statistics({ score, value }) {
    return (
        <tr>
            <td>{score}</td>
            <td>{value}</td>
        </tr>
    );
}

function Button({ state, text }) {
    return <button onClick={state}>{text}</button>;
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

    let total = score.bad + score.good + score.neutral;

    return (
        <main>
            <h1>give feedback</h1>
            <Button state={goodScore} text="good" />
            <Button state={neutralScore} text="neutral" />
            <Button state={badScore} text="bad" />
            <h2>statistics</h2>
            {total === 0 ? (
                <p>No feedback given</p>
            ) : (
                <table>
                    <tbody>
                        <Statistics score="good" value={score.good} />
                        <Statistics score="neutral" value={score.neutral} />
                        <Statistics score="bad" value={score.bad} />
                        <Statistics score="all" value={total} />
                        <Statistics
                            score="average"
                            value={(score.good - score.bad) / total}
                        />
                        <Statistics
                            score="positive"
                            value={(score.good * 100) / total}
                        />
                    </tbody>
                </table>
            )}
        </main>
    );
}

export default App;
