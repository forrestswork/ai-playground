import styles from './page.module.css'
import DemoService from '@/services/demo';
import DemoGrid from '@/components/demo-grid';
import Layout from '@/components/layout';
import {Demo} from '@/interfaces/demo';

export default function Home() {
    const demos: Demo[] = DemoService.list();
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




