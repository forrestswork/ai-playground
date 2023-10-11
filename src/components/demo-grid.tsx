'use client';
import * as React from 'react';
import {Demo} from '@/interfaces/demo';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from 'react';
import styles from '@/components/demo-grid.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DemoCard({demos}: {demos: Demo[]}) {
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
            <div className={styles.grid}>
                {filteredDemos &&
                    filteredDemos.map((demo, index) => (
                            <div className={styles.gridCell} key={index}>
                                <Card sx={{ width: 320, height: 360 }}>
                                    <CardMedia
                                        sx={{ height: 160, width: 320 }}
                                        image={demo.image}
                                        title={demo.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {demo.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {demo.description}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <a href={'/demos/' + demo.id}>
                                            <Button size="small">Try {demo.name}</Button>
                                        </a>
                                    </CardActions>
                                </Card>
                            </div>
                        ))
                }
            </div>
        </div>
    )
}




