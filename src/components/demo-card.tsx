'use client';
import {Demo} from '@/interfaces/demo';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface Props {
    demo: Demo
}

export default function DemoCard({demo}: Props) {
    return (
        <Card sx={{ height: 400 }}>
            <CardMedia
                sx={{ height: 180 }}
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
    )
}




