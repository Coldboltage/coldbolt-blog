import React, { useEffect, useState } from "react"
import Layout from "../../components"
import { CircularProgress } from "@material-ui/core"

const UsingEffect = () => {
  const [players, setPlayers] = useState([])
  const [teamName, setTeamName] = useState("")
  const [lpCalc, setLpCalc] = useState(null)
  const [query, setQuery] = useState("")
  // let callOne = "https://api.lolpros.gg/es/teams/fnatic"
  const [team, setTeam] = useState("demise")
  const [url, setUrl] = useState(`https://api.lolpros.gg/es/teams/${team}`)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [team])

  useEffect(() => {
    addLp()
  }, [players])

  const loadData = async () => {
    setLoading(true)
    const response = await fetch(url)
    const data = await response.json()
    const { current_members: members } = data
    const playerMembers = members.filter(member => member.role === "player")
    setPlayers([
      playerMembers[0],
      playerMembers[1],
      playerMembers[2],
      playerMembers[3],
      playerMembers[4],
    ])
    setTeamName(data.name)
  }

  const addLp = () => {
    console.log(players.length)
    if (players.length > 1) {
      console.log(players[1] === undefined)
      let newNumber = 0
      for (let i = 0; players.length > i; i++) {
        if (players[i] !== undefined) {
          console.log(`Fired for ${players[i].name}`)
          newNumber = newNumber + players[i].league_points
        }
      }

      newNumber = newNumber / players.length
      console.log(`The number is ${lpCalc}`)

      setLpCalc(newNumber)
      setLoading(true)
    }
  }

  return (
    <Layout>
      <div className="container">
        <h1>API and UseEffect</h1>
        <p>
          I've wanted to mess around with loading data whenever a person loads a
          page. In this case, I'm going to use the lolpros.gg api and grab some
          player data and see what I can do from there.
        </p>
        <input
          type="text"
          name=""
          id=""
          value={query}
          onChange={e => setQuery(e.target.value)}
        />

        <button
          onClick={() => {
            console.log("fired button")
            setTeam(query)
            setUrl(`https://api.lolpros.gg/es/teams/${query}`)
          }}
        >
          Test
        </button>

        {loading && (
          <div>
            <CircularProgress />
          </div>
        )}
        {teamName && !loading && (
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
                {players.map(player => {
                  console.log(player)
                  if (player === undefined) {
                    return
                  } else {
                    return (
                      <tr key={player.uuid}>
                        <td>{player.name}</td>
                        <td>{player.league_points}</td>
                      </tr>
                    )
                  }
                })}
                <tr>
                  <td>
                    <b>Total</b>
                  </td>
                  <td>
                    <b>{lpCalc}</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default UsingEffect
