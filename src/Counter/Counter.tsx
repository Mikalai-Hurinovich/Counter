import React from "react";
import s from './Counter.module.css'

type CounterPropsType = {
    counter: number
    setCounter: React.Dispatch<React.SetStateAction<number>>
    MaxVal: number
    MinVal: number
    error: string

}
const Counter = (props: CounterPropsType) => {
    const IncrementStyle = {
        color: 'red',
    }

    return (
        <>
            <div className={s.main}>
                <div className={s.wrapper}>
                    <h1 className={s.title}>Counter</h1>
                    <div>
                        <div
                            style={props.counter >= props.MaxVal || props.error === 'Incorrect Value!' ? IncrementStyle : undefined}
                            className={s.counter__display}>{props.error ? props.error : props.counter}</div>
                        <div className={s.counter__buttons}>
                            <button
                                disabled={props.counter >= props.MaxVal}
                                className={s.increment}
                                onClick={() => {
                                    props.setCounter(props.counter + 1)
                                }}>+
                            </button>
                            <button
                                disabled={props.counter <= props.MinVal}
                                className={s.decrement}
                                onClick={() => {
                                    props.setCounter(props.counter - 1)
                                }}>-
                            </button>
                            <button
                                disabled={props.counter === props.MinVal}
                                className={s.reset}
                                onClick={() => props.setCounter(props.MinVal)}>Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counter;
