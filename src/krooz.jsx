import { useLocation } from "react-router-dom";

function KROOZ (){

    const location = useLocation();
    const state = location.state;
    console.log(state)
    return (
        <>
        <img src={state.image}></img>
        <h1>Name: {state.title}</h1>
        <h1>rank: {state.rank}</h1>
        <h2>genre: {state.genre}</h2>
        <h2>{state.synopsis}</h2>
        </>
    )
}

export default KROOZ