'use client';
import styles from '@/components/styles/page.module.css';
import { SymbolText } from '@/components/styles/sharedStyles';
import BottomComponent from '@/components/common/bottom';
import HeadComponent from '@/components/common/head';

export default function MainClient() {
    return (
        <main className={styles.main}>
            {/* Head 영역 */}
            <HeadComponent />
            {/* ============================================= */}
            {/* Content 영역 */}

            <div className={styles.center}>
                <SymbolText>LeeHS [ BLOG ]</SymbolText>
            </div>

            {/* ============================================= */}
            {/* bottom영역 */}
            <BottomComponent />
        </main>
    );
}
