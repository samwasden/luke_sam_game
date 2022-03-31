import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import Footer from '../page/Footer'


export default function Team({selectTeam, teams, player}) {

  const [name, setname] = useState('')
  const [chosen, setchosen] = useState(false)

  return (
      <Box className='page centered'>
          <Box className='layout_box'>
              {chosen ? 
              <Box className='full_stacked_box'>
                  <Box className='full_box'>
                      <Button
                        disabled={teams['light'] !== null || teams['dark'] === name}
                        fullWidth
                        size='large'
                        variant='contained'
                        onClick={() => selectTeam('light', name)}
                      >
                        Light
                      </Button>
                  </Box>
                  <Box className='full_box'>
                      <Button
                        disabled={teams['dark'] !== null || teams['light'] === name}
                        fullWidth
                        size='large'
                        variant='contained'
                        onClick={() => selectTeam('dark', name)}
                      >
                        Dark
                      </Button>
                  </Box>
              </Box> 
              :
              <Box className='full_stacked_box'>
                <Box className='full_box'>
                    <TextField
                      fullWidth
                      label='Character Name'
                      variant='outlined'
                      value={name}
                      autoComplete='off'
                      onChange={(e) => setname(e.target.value)}
                    />
                </Box>
                <Box className='full_box'>
                    <Button
                      disabled={name === ''}
                      fullWidth
                      size='large'
                      variant='contained'
                      onClick={() => setchosen(true)}
                    >
                      Submit
                    </Button>
                </Box>
            </Box>
            }   
          </Box>
          {player.team !== '' && <Footer />}
      </Box>
    )
}
