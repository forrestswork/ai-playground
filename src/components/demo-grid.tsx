'use client';
import * as React from 'react';
import {Demo} from '@/interfaces/demo';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';
import styles from '@/components/demo-grid.module.css';
import DemoCard from '@/components/demo-card';
import {Grid} from '@mui/material';

export default function DemoGrid({demos}: {demos: Demo[]}) {
    const [filter, setFilter] = useState('');
    const handleChange = (e) => setFilter(e.target.value);
    const filteredDemos = demos.filter(demo => {
        const text = [
            demo.title,
            demo.description,
            ...demo.tags
        ].join(' ').toLowerCase();
        const search = filter.trim().toLowerCase();
        return text.includes(search);
    });
    return (
        <div>
            <div className={styles.search}>
                <TextField
                    id="input-with-icon-textfield"
                    placeholder="Search NGC Catalog"
                    className={styles.searchInput}
                    value={filter}
                    onChange={handleChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon/>
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                />
            </div>
            <Grid container spacing={2}>
                {filteredDemos &&
                    filteredDemos.map((demo, index) => (
                        <Grid item xs={4} key={index}>
                            <DemoCard demo={demo}></DemoCard>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}




