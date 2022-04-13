import ExpandMore from '@mui/icons-material/ExpandMore'
import Casino from '@mui/icons-material/Casino'
import MoreVert from '@mui/icons-material/MoreVert'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, Collapse, IconButton, Menu, MenuItem, Modal, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

export default function UnitCard({unit, setattack, settravel, setattacktype}) {

    const [collapse, setcollapse] = useState(false)
    const [menu, setmenu] = useState(false)


    const getHealth = (u) => {
        let total = 0
        u.grouphealth.forEach(member => {
            total += member
        })
        return total
    } 

    const closeMenu = () => {
        setmenu(false)
    }

    const evaluateOptions = () => {
        let options = []
        if (unit.turns > 0) {
            if (unit.stats["Close Attack"] > 0 || unit.rolls["Close Attack"]) {
                options.push("Close Attack")
            }
            if (unit.stats["Range Attack"] > 0 || unit.rolls["Range Attack"]) {
                options.push("Range Attack")
            }
            if (unit.stats["Travel"] > 0 || unit.rolls["Travel"]) {
                options.push("Travel")
            }
        }
        return options
    }

    const initiateAction = (action) => {
        if (action === 'Close Attack' || 'Range Attack') {
            setattacktype(action)
            setattack(true)
        } else if (action === 'Travel') {
            settravel(true)
        }
        closeMenu()
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
                        id={`menu_${unit.name}`}
                        aria-label="settings"
                        onClick={() => setmenu(!menu)}
                    >
                        <MoreVert className={menu ? 'more_horiz' : 'more_vert'} />
                    </IconButton>
                  }
            >
            </CardHeader>
            <Menu 
                open={menu}
                anchorEl={document.getElementById(`menu_${unit.name}`)}
                onClose={() => closeMenu()}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {evaluateOptions().map((op, i) => {
                    return <MenuItem key={i} onClick={() => initiateAction(op)}>{op}</MenuItem>
                })}
            </Menu>
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
                    <IconButton
                        className={collapse ? 'expand' : 'un_expand'}
                        onClick={() => setcollapse(!collapse)}>
                        <ExpandMore />
                    </IconButton>
                </Box>
            </CardActions>
        </Card>
    )
}
