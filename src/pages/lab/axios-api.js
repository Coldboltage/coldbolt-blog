import React, {useRef} from 'react'
import Layout from "../../components/layout"
import axios from "axios"


const AxiosApi = () => {
    // const apiButtonRef = useRef(null)
    const textInputRef = useRef(null)
    const answerRef = useRef(null)
    const apiCall = () => {
        let matchId = textInputRef.current.value;
        console.log(matchId)
        axios(`https://swapi.dev/api/${matchId}`).then(res => answerRef.current.textContent = res.data.name)
    }

    return (
        <Layout>
            <div className="container blog-title page-container" >
                <h1>Axios API</h1>
                <p>This is a test to see if I can use the Axios API which I have no idea if I can get work so that'll be good craic.</p>
                <p id="apiButton" className="waves-effect waves-light btn-small" onClick={apiCall} >Api Call?</p>
                <input type="text" ref={textInputRef} name="town" id="town" style={{width: "300px", display: "block", margin: "auto", textAlign: "center"}}/>
                <p className="answer" ref={answerRef}>I want to change this</p>
            </div>
        </Layout>
    )
}

export default AxiosApi
