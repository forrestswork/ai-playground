import styles from './page.module.css'
import DemoGrid from '@/components/demo-grid';
import Layout from '@/components/layout';
import {Demo} from '@/interfaces/demo';

export default async function Home() {
    const demos: Demo[] = await fetch('http://localhost:3000/api/demos').then(r => r.json());
    return (
        <Layout>
            <div className={styles.content}>
                <p>Welcome to the</p>
                <h1>AI Playground</h1>
                <p>The Intersection of AI, Art, and Science.</p>
            </div>
            <DemoGrid demos={demos} />
        </Layout>
    )
}




