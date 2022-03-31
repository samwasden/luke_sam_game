import { Avatar, Box, Card, CardContent, CardHeader, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Casino from '@mui/icons-material/Casino'
import React from 'react'

export default function Turn({data, player}) {

    const getHealth = (u) => {
        let total = 0
        u.grouphealth.forEach(member => {
            total += member
        })
        return total
    } 


    return (
        <Box className='page scroll'>
            <Box className='layout_box'>
                {data.units[player.team].map((unit, i) => {
                    return (
                        <Card className='card' key={i}>
                            <CardHeader 
                                className='card_header'
                                avatar={<Avatar>{unit.name[0]}</Avatar>}
                                title={`${unit.group} - ${unit.name}`}
                                subheader={`${unit.members} alive | ${getHealth(unit)} combined health`}
                            >
                            </CardHeader>
                            <CardContent>
                                <TableContainer component={Box}>
                                    <Table size='small'>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Type</TableCell>
                                                <TableCell align='right'>Value</TableCell>
                                                <TableCell align='right'>Dice</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Health</TableCell>
                                                <TableCell align='right'>{unit.health} +</TableCell>
                                                <TableCell align='right'></TableCell>
                                            </TableRow>
                                            {Object.entries(unit.stats).map(([key, value], i) => {
                                                return (
                                                    <TableRow key={i}>
                                                        <TableCell>{key}</TableCell>
                                                        <TableCell align='right'>{unit.stats[key]} +</TableCell>
                                                        <TableCell align='right'><Box className='dice_box'>{unit.rolls[key] > 0 && <Casino/>}{unit.rolls[key] > 0 && `x${unit.rolls[key]}`}</Box></TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </CardContent>
                        </Card>
                    )
                })}
            </Box>
        </Box>
    )
}
