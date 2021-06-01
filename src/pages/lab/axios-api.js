import React, {useRef, useEffect} from 'react'
import Layout from "../../components/layout"
import axios from "axios"


const AxiosApi = () => {
    // const apiButtonRef = useRef(null)
    const textInputRef = useRef(null)
    const answerRef = useRef(null)
    const apiCall = () => {
        let matchId = textInputRef.current.value;
        console.log(matchId)
        fetch(`https://euw1.api.riotgames.com/lol/match/v4/matches/${matchId}?api_key=RGAPI-9c874a5b-edfd-4eb5-8a65-4cf5a5696729`,{
            method: "get",
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
            }
        }).then(res => console.log(res))
    }

    return (
        <Layout>
            <div className="container blog-title">
                <h1>Axios API</h1>
                <p>This is a test to see if I can use the Axios API which I have no idea if I can get work so that'll be good craic.</p>
                <a id="apiButton" className="waves-effect waves-light btn-small" onClick={apiCall} >Api Call</a>
                <input type="text" ref={textInputRef} name="town" id="town" style={{width: "300px", display: "block", margin: "auto", textAlign: "center"}}/>
                <p className="answer" ref={answerRef}>I want to change this</p>
            </div>
        </Layout>
    )
}

export default AxiosApi