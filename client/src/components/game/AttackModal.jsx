import { Modal, Box } from '@mui/material'
import React from 'react'
import UnitCardOpp from './UnitCardOpp'

export default function AttackModal({open, setopen, attacktype, player, data, offensiveRoll, setdefender}) {
  return (
    <Modal
        sx={{
            backdropFilter: 'blur(5px)'
        }}
        open={open}
        onClose={() => setopen(false)}
    >
        <Box className='modal'>
            <Box className='full_stacked_box'>
                {data.units[player.opponent].filter((unit) => {
                    return unit.members > 0
                }).map((unit, j) => {
                    return <UnitCardOpp key={j} unit={unit} offensiveRoll={offensiveRoll} setdefender={setdefender} setopen={setopen}/>
                })}
            </Box>
        </Box>
    </Modal>
  )
}
