import { Box } from '@mui/material'
import React, { useState } from 'react'
import AttackModal from './AttackModal'
import DefendModal from './DefendModal'
import Roller from './Roller'
import TravelModal from './TravelModal'
import UnitCard from './UnitCard'

export default function Turn({data, player}) {

    const [attack, setattack] = useState(false)
    const [travel, settravel] = useState(false)
    const [defend, setdefend] = useState(false)
    const [attacktype, setattacktype] = useState('')
    const [attacker, setattacker] = useState('')
    const [defender, setdefender] = useState('')
    const [rolls, setrolls] = useState(0)
    const [roller, setroller] = useState(false)

    const offensiveRoll = () => {
        let rolls = data.units[player.team].rolls[attacker]
        if (rolls > 0) {
            setrolls(rolls)
            setroller(true)
        }
    }

    const launchAttack = () => {

    }

    const launchDefense = () => {

    }

    return (
        <Box className='page scroll'>
            <Box className='layout_box'>
                {data.units[player.team].map((unit, i) => {
                    return (
                        <UnitCard key={i} unit={unit} setattack={setattack} settravel={settravel} setattacktype={setattacktype} setattacker={setattacker}/>
                    )
                })}
            </Box>
            <AttackModal open={attack} setopen={setattack} attacktype={attacktype} player={player} data={data} offensiveRoll={offensiveRoll} setdefender={setdefender}/>
            <TravelModal open={travel} setopen={settravel} />
            <Roller open={roller} setopen={setroller} />
        </Box>
    )
}
