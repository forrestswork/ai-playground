import Image from 'next/image'
import styles from './header.module.css'

export default function Header () {
    return (
        <header className={styles.header}>
            <div className="brand">
                <a href="/"
                   title="Artificial Intelligence Computing Leadership from NVIDIA"
                   alt="Artificial Intelligence Computing Leadership from NVIDIA" aria-labelledby="nvidia_logo_desktop">
                    <Image
                        src="/logo.png"
                        width={149}
                        height={45}
                        alt="Nvidia logo" />
                </a>
            </div>
            <div className={styles.title}>
                AI Playground
            </div>
            <div className={styles.userMenu}></div>
        </header>
    )
}
