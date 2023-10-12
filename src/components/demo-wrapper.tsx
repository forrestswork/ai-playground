import Image from 'next/image'
import styles from './demo-wrapper.module.css'
import {Demo} from '@/interfaces/demo';
import {ReactNode} from 'react';
import * as React from 'react';
import {Card, CardActions, CardContent, CardMedia, Chip, Typography} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

interface Props {
    children: ReactNode;
    demo: Demo
}

export default function DemoWrapper ({demo, children}: Props) {
    return (
        <div className={styles.demoWrapper}>
            <div className={styles.demoDetails}>
                <Card sx={{ width: 320}}>
                    <CardMedia
                        sx={{ height: 160, width: 320 }}
                        image={demo.image}
                        title={demo.title}
                    />
                    <CardContent>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Description"
                                    secondary={demo.description} />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Publisher"
                                    secondary={demo.publisher} />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Version"
                                    secondary={demo.version} />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Last Modified"
                                    secondary={demo.lastModified} />
                            </ListItem>
                        </List>
                        <div className={styles.tags}>
                            {demo.tags.map((tag, index) => (<Chip className={styles.tag} key={index} label={tag} />))}
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className={styles.demoForm}>
                <Card>
                    <CardContent>
                        {children}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
