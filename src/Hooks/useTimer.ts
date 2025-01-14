import { useState, useEffect, useCallback } from 'react'

const TIMER_VALUE = 300;

export function useTimer()
 {
    const [time, setTime] = useState(TIMER_VALUE);
    const [go, setGo] = useState(false);
    let timeoutId = 0;
    useEffect(() => {
        if( go && time > 0)
            {
            timeoutId = setTimeout(() => {
                setTime((t) => t - 1)
            }, 1000);
        }
        else {
            setGo(false)
        }
        return () => clearTimeout(timeoutId)
    }, [go, time]);

    const start = useCallback(() => setGo(true),[]);
    const stop = useCallback(() => setGo(false),[]);
    const reset = useCallback(() => setTime(TIMER_VALUE),[]);
    return {time, start, stop, reset}
}