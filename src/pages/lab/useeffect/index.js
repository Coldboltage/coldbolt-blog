import React, { useEffect, useState } from "react"
import Layout from "../../../components/layout"
import { CircularProgress } from "@material-ui/core"
import * as styles from "../../../css/useeffect.module.css"

const UsingEffect = () => {
  const [players, setPlayers] = useState([])
  const [teamName, setTeamName] = useState("")
  const [lpCalc, setLpCalc] = useState(null)
  const [query, setQuery] = useState("")
  // let callOne = "https://api.lolpros.gg/es/teams/fnatic"
  const [team, setTeam] = useState("")
  const [url, setUrl] = useState(`https://api.lolpros.gg/es/teams/${team}`)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [showError, setShowError] = useState(false)

  useEffect(() => {
    async function fetchAPI() {
      setLoading(true)
      console.log("firing loadData")
      const response = await fetch(url)
      // If this is false, we got ourselves a 404 error
      if (response.status === 404) {
        console.log(response.statusText)
        setError(true)
        setShowError(true)
        setLoading(false)
        setTimeout(() => {
          setShowError(false)
        }, 3000)
      } else {
        setError(false)
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
      
    }
    fetchAPI()
  }, [url])

  useEffect(() => {
    if (players.length > 1) {
      let newNumber = 0
      for (let i = 0; players.length > i; i++) {
        if (players[i] !== undefined) {
          console.log(`Fired for ${players[i].name}`)
          newNumber = newNumber + players[i].league_points
        }
      }
      newNumber = newNumber / players.length

      setLpCalc(newNumber)
    }
    setLoading(false)
  }, [players])

  //   const loadData = async () => {
  //     setLoading(true)
  //     console.log("firing loadData")
  //     const response = await fetch(url)
  //     // If this is false, we got ourselves a 404 error
  //     if (response.status === 404) {
  //       console.log(response.statusText)
  //       setError(true)
  //       setShowError(true)
  //       setLoading(false)
  //       setTimeout(() => {
  //         setShowError(false)
  //       }, 3000)
  //     } else {
  //       setError(false)
  //       const data = await response.json()
  //       const { current_members: members } = data
  //       const playerMembers = members.filter(member => member.role === "player")
  //       setPlayers([
  //         playerMembers[0],
  //         playerMembers[1],
  //         playerMembers[2],
  //         playerMembers[3],
  //         playerMembers[4],
  //       ])
  //       setTeamName(data.name)
  //     }
  //   }

  //   const addLp = () => {
  //     console.log("Fired within function")
  //     if (players.length > 1) {
  //       console.log(players[1] === undefined)
  //       let newNumber = 0
  //       for (let i = 0; players.length > i; i++) {
  //         if (players[i] !== undefined) {
  //           console.log(`Fired for ${players[i].name}`)
  //           newNumber = newNumber + players[i].league_points
  //         }
  //       }
  //       newNumber = newNumber / players.length
  //       console.log(`The number is ${lpCalc}`)

  //       setLpCalc(newNumber)
  //     }
  //     setLoading(false)
  //   }

  return (
    <Layout>
      <div className="container page-container">
        <h1>API and UseEffect</h1>
        <p>
          I've wanted to mess around with loading data whenever a person loads a
          page. In this case, I'm going to use the lolpros.gg api and grab some
          player data and see what I can do from there.
        </p>
        <input
          className={styles.queryInput}
          type="text"
          name=""
          id=""
          value={query}
          onChange={e => setQuery(e.target.value)}
        />

        <button
          onClick={() => {
            setTeam(query)
            setUrl(`https://api.lolpros.gg/es/teams/${query}`)
            setQuery("")
          }}
        >
          Test
        </button>

        {loading && (
          <div className={styles.loading}>
            <CircularProgress />
          </div>
        )}

        {showError && <h1>WE GOT OURSELVES AN ERROR</h1>}

        {teamName && !loading && !error && (
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
                  if (player === undefined) {
                    return null
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
