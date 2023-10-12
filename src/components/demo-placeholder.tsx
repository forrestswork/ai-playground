import {Demo} from '@/interfaces/demo';
import * as React from 'react';
import {Grid, Skeleton, Stack, Typography} from '@mui/material';

interface Props {
    demo: Demo
}

export default function DemoPlaceholder ({demo}: Props) {
    return (
        <Grid container spacing={8}>
            <Grid item xs={5}>
                <Typography variant="h4">Under Construction</Typography>
                <Typography variant="body2">
                    The {demo.name} demo is currently under construction. Please check back shortly to review this API.
                </Typography>
            </Grid>
            <Grid item xs={7}>
                <Stack spacing={1}>
                    <Skeleton variant="rounded" height={240} />
                    <Skeleton variant="rounded" height={30} />
                    <Skeleton variant="rounded" height={120} />
                </Stack>
            </Grid>
        </Grid>
    )
}
