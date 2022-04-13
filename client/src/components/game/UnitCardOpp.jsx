import Casino from '@mui/icons-material/Casino'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'

export default function UnitCardOpp({unit, offensiveRoll, setdefender, setopen}) {

    const [collapse, setcollapse] = useState(false)

    const getHealth = (u) => {
        let total = 0
        u.grouphealth.forEach(member => {
            total += member
        })
        return total
    } 

  return (
    <Card className='card'>
            <CardHeader 
                className='card_header'
                avatar={<Avatar>{unit.name[0]}</Avatar>}
                title={`${unit.group} - ${unit.name}`}
                subheader={`${unit.members} alive | ${getHealth(unit)} combined health`}
                action={
                    <IconButton
                        className={collapse ? 'expand' : 'un_expand'}
                        onClick={() => setcollapse(!collapse)}>
                        <ExpandMore />
                    </IconButton>
                }
            >
            </CardHeader>
            <Collapse in={collapse}>
                <CardContent sx={{p: 0, '&:last-child': { pb: 0 }}}>
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
                                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={i}>
                                            <TableCell>{key}</TableCell>
                                            <TableCell align='right'>{unit.stats[key]} +</TableCell>
                                            <TableCell align='right'><Box className='dice_box'>{unit.rolls[key] > 0 && <Casino />}{unit.rolls[key] > 0 && `x${unit.rolls[key]}`}</Box></TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Collapse>
            <CardActions>
                <Box className='card_footer'>
                    <Button 
                        variant='contained'
                        fullWidth
                        onClick={() => {
                            setdefender(unit.name)
                            offensiveRoll()
                            setopen(false)
                        }}
                    >
                        Attack
                    </Button>
                </Box>
            </CardActions>
            </Card>
  )
}
