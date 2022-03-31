import { Alert } from '@mui/material'
import React, { useEffect } from 'react'

export default function AlertUser({data, setalert}) {

    useEffect(() => {
        setTimeout(() => {
            setalert(false)
        }, 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Alert className='alert' variant='filled' severity={data.severity}>{data.message}</Alert>
    )
}
