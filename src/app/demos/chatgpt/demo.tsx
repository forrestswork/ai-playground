'use client';
import {IconButton, Grid, Paper, TextField, Typography} from '@mui/material';
import Stack from '@mui/material/Stack';

import * as React from 'react';
import {useState} from 'react';
import InputSlider from '@/components/input-slider';
import SendIcon from '@mui/icons-material/Send';
import styles from './demo.module.css';

export default function Demo() {
    const [temperature, setTemperature] = useState(0.2);
    const [max_tokens, setMaxTokens] = useState(250);
    const [frequency_penalty, setFrequencyPenalty] = useState(0);
    const [messages, setMessages] = useState([
        {
            "role": "assistant",
            "content": "Hello there, how may I assist you today?",
        }
    ]);
    const pushMessage = (role, content) => {
        console.log({role, content});
        console.log('before', {messages});
        setMessages(thread => [
            ...thread,
            {role, content}
        ])
        console.log('after', {messages});
    }
    const [prompt, setPrompt] = useState('');

    const send = async () => {
        const requestData = {
            temperature,
            max_tokens,
            frequency_penalty,
            messages: [
                ...messages,
                {
                    role: 'user',
                    content: prompt
                }
            ]
        }
        const res: any = await fetch('http://localhost:3000/demos/chatgpt/api', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData)
        });
        const json = await res.json();
        return json;
    }

    const submit = async () => {
        pushMessage('user', prompt);
        setPrompt('');
        const res = await send();
        const message = res.choices[0].message;
        pushMessage(message.role, message.content);
    }

    return (
        <Grid container spacing={16}>
            <Grid item xs={6}>
                <Stack spacing={2}>
                    <Typography variant="h4">Parameters</Typography>
                    <InputSlider value={temperature} min={0} max={1} step={.1} label="Temperature" handleChange={setTemperature} />
                    <InputSlider value={frequency_penalty} min={-2} max={2} step={.1} label="Frequency Penalty" handleChange={setFrequencyPenalty} />
                    <InputSlider value={max_tokens} min={50} max={500} step={1} label="Max tokens" handleChange={setMaxTokens} />
                </Stack>
            </Grid>
            <Grid item xs={6}>
                <div className={styles.chat}>
                    {
                        messages.map((message, index) => (
                            <Paper key={index} elevation={1} className={message.role === 'assistant' ? styles.agentMessage : styles.userMessage}>
                                <Typography variant="body2">{message.content}</Typography>
                            </Paper>
                        ))
                    }
                </div>
                <Grid container>
                    <Grid item xs={10}>
                        <TextField variant="outlined" size="small" value={prompt} onChange={e => setPrompt(e.target.value)}/>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton onClick={() => submit()}>
                            <SendIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
