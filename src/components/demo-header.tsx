import styles from './demo-header.module.css'
import {Demo} from '@/lib/interfaces/demo';

interface Props {
    demo: Demo
}

export default function DemoHeader ({demo}: Props) {
    return (
        <div className={styles.demoHeader}>
            <div className={styles.demoHeaderInner}>
                <div className={styles.breadcrumbs}>
                    <a href="/">AI Playground</a>
                    <span className={styles.divider}>/</span>
                    <a disabled>demos</a>
                    <span className={styles.divider}>/</span>
                    <a disabled>{demo.name}</a>
                </div>
                <h1 className={styles.title}>{demo.title}</h1>
            </div>
        </div>
    )
}
