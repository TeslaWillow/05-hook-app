import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback(
      (value) => {
        setCounter((c) => c + value);
        // setCounter(counter + 1) This way doesn't work
      },[]
    )
    

    /*
        const incrementFather = () => {
            setCounter(counter + 1);
        };
    */

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>
    )
}
