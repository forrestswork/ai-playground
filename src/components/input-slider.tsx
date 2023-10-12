'use client';
import {Grid, TextField, Typography} from '@mui/material';
import Slider from '@mui/material/Slider';
import * as React from 'react';

export interface Props {
    value: number;
    min: number;
    max: number;
    step: number;
    label: string;
    handleChange: (number) => void;
}

export default function InputSlider ({label, value, handleChange, min, max, step}: Props) {
    return (
        <div>
            <Grid container>
                <Grid item xs={8}>
                    <Typography variant="subtitle2">{label}</Typography>
                </Grid>
                <Grid item xs={4}>
                    <TextField variant="outlined" size="small" value={value} onChange={(e) => handleChange(e.target.value)} />
                </Grid>
            </Grid>
            <Slider value={value} min={min} max={max} step={step} onChange={(e) => handleChange(e.target.value)} />
        </div>
    )
}


