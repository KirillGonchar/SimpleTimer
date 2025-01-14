import { useTimer } from './../Hooks/useTimer.ts'
import './Timer.css'

const Timer = () => {
    const {time, start, stop, reset} = useTimer();


    return (
        <div>
            <h2>{`${Math.floor(time / 60)} : ${time % 60 < 10 ? `0${time % 60}` : time % 60}`}</h2>
            <div>
                <button onClick={start}>Start</button>
                <button style={{ margin: '.3em' }} onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Timer
