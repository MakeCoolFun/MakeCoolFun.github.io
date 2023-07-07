'use client';

import styles from '@/components/styles/page.module.css';
import Link from 'next/link';

const BottomComponent = () => {
    // bottom을 구성하는 data
    const MainClientData = [
        {
            id: 'm00',
            url: '/dashboard/profilePage',
            name: 'profilePage',
            as: '/dashboard',
            h2: 'Profile',
            p: '제 인적사항입니다',
        },
        {
            id: 'm01',
            url: '/dashboard/careerPage',
            name: 'careerPage',
            as: '/dashboard',
            h2: 'Career',
            p: '현재까지 일한 경력입니다.',
        },
        {
            id: 'm02',
            url: '/dashboard/projectPage',
            name: 'projectPage',
            as: '/dashboard',
            h2: 'Project',
            p: '지금까지 참여했던 project.',
        },
        {
            id: 'm03',
            url: '/dashboard/newsPage',
            name: 'newsPage',
            as: '/dashboard',
            h2: 'News',
            p: '크롤링을 통한 news 모음집입니다.',
        },
    ];
    console.log('MainClientData[0].name', MainClientData[0].name);

    return (
        <div className={styles.grid}>
            {MainClientData.map((m_c_data) => (
                <Link key={m_c_data.id} href={m_c_data.url} className={styles.card}>
                    <h2>
                        {m_c_data.h2} <span>-&gt;</span>
                    </h2>
                    <p>{m_c_data.p}</p>
                </Link>
            ))}
        </div>
    );
};

export default BottomComponent;
