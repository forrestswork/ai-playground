import Layout from '@/components/layout';
import * as React from 'react';
import {Metadata} from 'next';
import DemoWrapper from '@/components/demo-wrapper';
import DemoHeader from '@/components/demo-header';
import Demo from './demo';

export const metadata: Metadata = {
    title: 'ChatGPT'
}

export default async function DemoPage() {
    const config = await fetch('http://localhost:3000/api/demos/chatgpt').then(r => r.json());
    return (
        <Layout top={<DemoHeader demo={config}/>}>
            <DemoWrapper demo={config}>
                <Demo/>
            </DemoWrapper>
        </Layout>
    )
}



