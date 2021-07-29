import React, { useEffect, useState } from 'react'
import Layout from "../../components/layout"


const UsingEffect = () => {
    const [players, setPlayers] = useState([])
    const [teamName, setTeamName] = useState("")
    const [playerOne, setPlayerOne] = useState("")
    const [playerTwo, setPlayerTwo] = useState("")
    const [playerThree, setPlayerThree] = useState("")
    const [playerFour, setPlayerFour] = useState("")
    const [playerFive, setPlayerFive] = useState("")
    const [lpCalc, setLpCalc] = useState(null);
    let callOne = "https://api.lolpros.gg/es/teams/rogue";

    useEffect(() => {
        loadData()
    }, [teamName])

    const loadData = async () => {
        const response = await fetch(callOne, {
            mode: "cors",
            header: {
                "Access-Control-Allow-Origin":"*"
            }
        });
        const data = await response.json();
        const { current_members: members } = data;
        const playerMembers = members.filter(member => member.role === "player");
        setPlayerOne(playerMembers[0]);
        setPlayerTwo(playerMembers[1]);
        setPlayerThree(playerMembers[2]);
        setPlayerFour(playerMembers[3]);
        setPlayerFive(playerMembers[4])
        setTeamName(data.name);
    }
    return (
        <Layout>
            <div className="container">
                <h1>API and UseEffect</h1>
                <p>I've wanted to mess around with loading data whenever a person loads a page. In this case, I'm going to use the lolpros.gg api and grab some player data and see what I can do from there.
                </p>
                {playerFive &&
                    <div>
                        <h2>{teamName}</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>League Pounds</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{playerOne.name}</td>
                                    <td>{playerOne.league_points}</td>
                                </tr>
                                <tr>
                                    <td>{playerTwo.name}</td>
                                    <td>{playerTwo.league_points}</td>
                                </tr>
                                <tr>
                                    <td>{playerThree.name}</td>
                                    <td>{playerThree.league_points}</td>
                                </tr>
                                <tr>
                                    <td>{playerFour.name}</td>
                                    <td>{playerFour.league_points}</td>
                                </tr>
                                <tr>
                                    <td>{playerFive.name}</td>
                                    <td>{playerFive.league_points}</td>
                                </tr>
                                <tr>
                                    <td><b>Total</b></td>
                                    <td><b>{(playerOne.league_points + playerTwo.league_points + playerThree.league_points + playerFour.league_points + playerFive.league_points) / 5}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </Layout>
    )
}

export default UsingEffect
