import React, { useEffect, useState } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darktheme, lighttheme } from '../../app/theme';
import { io } from 'socket.io-client'
import Join from './Join';
import Team from './Team';
import Header from '../page/Header';
import Chapter from './Chapter';
import Turn from './Turn';
import AlertUser from '../page/AlertUser';

const socket = io(process.env.REACT_APP_SOCKET_URL)

export default function Game() {

    const [text, settext] = useState('Game')
    const [teams, setteams] = useState({})
    const [display, setdisplay] = useState('join')
    const [data, setdata] = useState({})
    const [alert, setalert] = useState(false)
    const [alertdata, setalertdata] = useState({
        severity: 'success',
        message: ''
    })
    const [player, setplayer] = useState({
        name: '',
        team: '',
        room: '',
        opponent: ''
    })

    const startGame = (room) => {
        if (room === 'new') {
            socket.emit('start_game')
        } else {
            socket.emit('join_game', {room: room.toUpperCase()})
        }
    }

    const selectTeam = (team, name) => {
        if (team === 'light') {
            setplayer({...player, team: team, name: name, opponent: 'dark'})
        } else {
            setplayer({...player, team: team, name: name, opponent: 'light'})
        }
        socket.emit('select_team', {room: player.room, team: team, name: name})
    }

    const selectChapter = (chapter) => {
        socket.emit('select_chapter', {room: player.room, chapter: `chapter_${chapter}`})
    }


    useEffect(() => {

        socket.on('game_joined', (data) => {
            settext(data.room)
            setplayer({...player, room: data.room})
            setteams(data.teams)
            setdisplay('team')
        })

        socket.on('game_teams', (data) => {
            setteams(data.teams)
            if (data.teams.light && data.teams.dark) {
                setdisplay('chapter')
                settext('Select Chapter')
            }
        })

        socket.on('game_data', (data) => {
            settext('Game')
            setdata(data)
            setdisplay('game')
            console.log(data)
        })

        socket.on('error', (data) => {
            setalertdata({severity: 'error', message: data.message})
            setalert(true)
        })

        socket.on("disconnect", (reason) => {
            setalertdata({severity: 'error', message: `Disconnected ${reason}`})
            setalert(true)
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <ThemeProvider theme={player.team === 'light' ? lighttheme : darktheme}>
            <CssBaseline />
            <Header text={text}></Header>
            {display === 'join' && 
                <Join startGame={startGame} player={player} />}
            {display === 'team' &&
                <Team teams={teams} selectTeam={selectTeam} player={player}/>}
            {display === 'chapter' &&
                <Chapter selectChapter={selectChapter} player={player}/>}
            {display === 'game' &&
                <Turn data={data} player={player}/>}
            {alert ? <AlertUser data={alertdata} setalert={setalert}/> : null}
        </ThemeProvider>
    )
}
