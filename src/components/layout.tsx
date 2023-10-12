import '../app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer';
import Header from '@/components/header';
import styles from './layout.module.css';
import {ReactNode} from 'react';
import {Demo} from '@/interfaces/demo';

const inter = Inter({ subsets: ['latin'] })

interface Props {
  children: ReactNode;
  top?: ReactNode;
}

export default function RootLayout({
  children,
    top
}: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className={styles.contentBody}>
          {top &&
              <div className={styles.contentTop}>
                {top}
              </div>
          }
          <div className={styles.contentInner}>
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
