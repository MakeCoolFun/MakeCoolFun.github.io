'use client';

import Router, { useSearchParams } from 'next/navigation';
import ProfileClient from '@/components/contents/profile_content';
import NewsClient from '@/components/contents/news_content';
import CareerClient from '@/components/contents/career_content';
import ProjectClient from '@/components/contents/project_content';
// params를 통해서 값을 받아온다.
// [column]을 자동으로 읽음.
const DashBoardPage = ({ params }: { params: { column: string } }) => {
    //1. name 값을 받아온다.
    //bottom.tsx의 component에서 값을 받아온다.

    //1-1 useSearchParams()를 이용해서 가져오는 방법
    const searchData = params.column;
    //1-2 props를 이용해서 가져오는 방법 ( interface 이용 )
    console.log('searchData', searchData);
    //name 값에 따라 페이지를 따로 불러온다
    //각 상황 별로 특정 화면을 불러오는 page
    //dashboard page 하나로 여러가지 화면을 불러오는 방식
    //각 component에는 각각의 content를 불러올 것
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
