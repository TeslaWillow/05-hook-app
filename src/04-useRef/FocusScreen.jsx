import { useRef } from "react";

export const FocusScreen = () => {

    const inputRef = useRef(); //dont trigger re-rendering


    const onClick = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);
        inputRef.current.select();
    }

  return (
    <>
        <div>FocusScreen</div>
        <hr />

        <input 
            ref={inputRef}
            type="text" 
            placeholder="Ingrese su nombre" 
            className="form-control" 
        />

        <button 
            className="btn btn-primary mt-2"
            onClick={ onClick }
        >
            set focus
        </button>
    </>
  )
}
