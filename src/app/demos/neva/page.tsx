import {Metadata} from 'next';
import Layout from '@/components/layout';
import DemoHeader from '@/components/demo-header';
import DemoWrapper from '@/components/demo-wrapper';
import DemoPlaceholder from '@/components/demo-placeholder';

export const metadata: Metadata = {
    title: 'Neva'
}

export default async function Demo() {
    const config = await fetch('http://localhost:3000/api/demos/neva').then(r => r.json());
    return (
        <Layout top={<DemoHeader demo={config} />}>
            <DemoWrapper demo={config}>
                <DemoPlaceholder demo={config} />
            </DemoWrapper>
        </Layout>
    )
}
