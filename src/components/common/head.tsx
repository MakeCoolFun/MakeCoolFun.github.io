'use client';

import styles from '@/components/styles/page.module.css';
import Link from 'next/link';
import Image from 'next/image';

const HeadComponent = () => {
    // Head를 구성하는 data

    return (
        <div className={styles.description}>
            <div>
                <Link href="/" rel="noopener noreferrer">
                    By{' '}
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        className={styles.vercelLogo}
                        width={100}
                        height={24}
                        priority
                    />
                </Link>
            </div>
        </div>
    );
};

export default HeadComponent;
