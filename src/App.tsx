import React, {useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";
import CounterSettings from "./CounterSettings/CounterSettings";

function App() {
    let [counter, setCounter] = useState<number>(0);
    let [MinVal, setMinVal] = useState<number>(0);
    let [MaxVal, setMaxVal] = useState<number>(2);
    let [error, setError] = useState<string>('');


    const setSettings = (min: number, max: number) => {
        setMinVal(min)
        setMaxVal(max)
        setError('')
        setCounter(counter)
    }

    return (
        <div className="App">
            <CounterSettings
                setCounter={setCounter}
                MinVal={MinVal}
                MaxVal={MaxVal}
                setError={setError}
                setSettings={setSettings}
                error={error}
            />
            <Counter
                MinVal={MinVal}
                MaxVal={MaxVal}
                counter={counter}
                setCounter={setCounter}
                error={error}
            />

        </div>
    );
}

export default App;
