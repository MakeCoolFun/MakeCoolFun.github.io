'use client';
import styles from '@/components/styles/page.module.css';
import HeadComponent from '@/components/common/head';
import BottomComponent from '@/components/common/bottom';

const DashBoardLayOut = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className={styles.main}>
            {/* Head 영역 */}
            <HeadComponent />
            {/* ============================================= */}
            {/* Content 영역 */}

            <div className={styles.center}>{children}</div>

            {/* ============================================= */}
            {/* bottom영역 */}
            <BottomComponent />
        </main>
    );
};

export default DashBoardLayOut;
