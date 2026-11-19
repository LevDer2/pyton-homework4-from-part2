import './App.css';
import { useState } from "react";

function App() {
    const [number, setNumber] = useState("");
    const [result, setResult] = useState(null);
    const [colorIndex, setColorIndex] = useState(-1);

    const colors = ["red", "blue", "green", "yellow", "purple"];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    function handleNumberChange(event) {
        setNumber(event.target.value);
        setResult(null);
    }

    function handleCalculate(event) {
        event.preventDefault();

        if (number === "") return;

        const value = Number(number);

        setResult({
            square: value * value,
            cube: value * value * value,
            remainder: value % 5
        });
    }

    function isEven(number) {
        return number % 2 === 0;
    }

    function handleColorChange() {
        setColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }

    return (
        <div
            className="app"
            style={{
                backgroundColor: colorIndex === -1
                    ? "white"
                    : colors[colorIndex]
            }}
        >
            <h2>Task 1: Calculator</h2>

            <form onSubmit={handleCalculate}>
                <h4>Write number here!</h4>

                <input
                    type="number"
                    placeholder="Write number here!"
                    value={number}
                    onChange={handleNumberChange}
                />

                <button type="submit">Calculate</button>
            </form>

            {result !== null && (
                <>
                    <p>Square: {result.square}</p>
                    <p>Cube: {result.cube}</p>
                    <p>Remainder of division by 5: {result.remainder}</p>
                </>
            )}

            <h2>Task 2: Even or Odd</h2>

            {numbers.map((num) => (
                <p key={num}>
                    {num} is {isEven(num) ? "even" : "odd"}!
                </p>
            ))}

            <h2>Task 3: Change Background Color</h2>

            <button type="button" onClick={handleColorChange}>
                CHANGE COLOR!
            </button>
        </div>
    );
}

export default App;
