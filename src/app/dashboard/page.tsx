'use client';

import Router, { useSearchParams } from 'next/navigation';
import ProfileClient from '@/components/contents/profile_content';
import NewsClient from '@/components/contents/news_content';
import CareerClient from '@/components/contents/career_content';
import ProjectClient from '@/components/contents/project_content';

const DashBoardPage = () => {
    const searchData = useSearchParams().get('search');
    console.log(searchData);

    console.log('searchData', searchData);
    if (searchData === 'profilePage') {
        return <ProfileClient />;
    } else if (searchData === 'projectPage') {
        return <ProjectClient />;
    } else if (searchData === 'newsPage') {
        return <NewsClient />;
    } else if (searchData === 'careerPage') {
        return <CareerClient />;
    }
};
export default DashBoardPage;
