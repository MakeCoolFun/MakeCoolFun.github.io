'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { styled } from 'styled-components';

//프로필 카드
const ProfileClient = () => {
    // 0. path 확인
    const currentPath = usePathname();
    // 1. 내 사진 ( 이미지 포함)
    const PICTURE_LIST = [{ id: 'lee_00', url: require('../../../public/profilepicture/lhs_0.jpg'), name: 'lee_00' }];
    // 2. 내 경력
    const CAREER_LIST = [
        { id: 'cl_00', name: '디유넷', work: '대학 학생 역량 강화 시스템', period: '5개월' },
        { id: 'cl_01', name: 'KTDS', work: 'KTDS 소스코드 검증 및 해당 웹 개발', period: '12개월' },
        { id: 'cl_02', name: '세송아이티', work: '국민은행 백업 및 서버 관리', period: '11개월' },
        { id: 'cl_03', name: 'Mocha-compony', work: '관리자 페이지 예정', period: '1개월' },
    ];
    // 3. 내 사용 해본 언어(이미지 포함)
    const USED_LIST = [
        { id: 'ul_00', name: 'JAVA' },
        { id: 'ul_01', name: 'JavaScript' },
        { id: 'ul_02', name: 'React' },
    ];

    // 4. github 주소
    const GIT_PATH = [
        {
            id: 'gl_00',
            path: 'https://makecoolfun.github.io/',
            url: 'https://makecoolfun.github.io/',
        },
    ];
    const ICON_LIST = [
        { id: 'il_00', url: require('../../../public/icon/icons8-github.gif'), name: '깃허브' },
        { id: 'il_01', url: require('../../../public/icon/icons8-java.gif'), name: '자바' },
        { id: 'il_02', url: require('../../../public/icon/icons8-js.gif'), name: '자바스크립트' },
        { id: 'il_03', url: require('../../../public/icon/icons8-react.gif'), name: '리액트' },
    ];
    return (
        <CardDiv>
            <TopDiv>
                {/* image(내 사진) */}
                <PictureDiv>
                    {PICTURE_LIST.map((pData) => (
                        <Image src={pData.url} alt={pData.name} key={pData.id} fill sizes="200px" priority={true} />
                    ))}
                </PictureDiv>
                {/* 이름  */}
                {/* 영어 이름 */}
                <NameAndIntroDiv>
                    <NameDiv>Lee Hak Song</NameDiv>
                    <IntroDiv>Kai</IntroDiv>
                    <IntroDiv>WEB/APP DEVELOPER</IntroDiv>
                </NameAndIntroDiv>
            </TopDiv>
            <BottomDiv>
                <SkillDiv>
                    {ICON_LIST.map((iData) => (
                        <IconDiv key={iData.id}>
                            <Image src={iData.url} alt={iData.name} fill sizes="10px" priority={true} />
                        </IconDiv>
                    ))}
                </SkillDiv>
            </BottomDiv>
        </CardDiv>
    );
};

const CardDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 440px;
    height: 400px;
    border-radius: 30px 30px 10px 60px;
    overflow: hidden;
    background-color: white;
    z-index: 1;
    box-shadow: 5px 5px 25px 12px rgb(255, 255, 255);
`;

const TopDiv = styled.div`
    display: flex;
    background-color: #fff;
`;
const BottomDiv = styled.div`
    display: flex;
    justify-content: center;
    background-color: #fff;
`;

const PictureDiv = styled.div`
    border-radius: 50%;
    margin: 16px 16px;
    width: 200px;
    height: 240px;
    box-shadow: 5px 10px 30px 14px rgb(143, 121, 103);
    position: relative;
    overflow: hidden;
`;

const NameAndIntroDiv = styled.div`
    width: 200px;
    height: 240px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: white;
`;

const NameDiv = styled.div`
    margin-top: 10px;
    width: 100%;
    height: 48px;
    line-height: 48px;
    font-style: italic;
    font-size: 28px;
    font-weight: bold;
    font-family: 'AbrilFatfaceRegular';
    color: rgb(143, 121, 103);
    background-color: white;
`;
const IntroDiv = styled.div`
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    font-family: 'AbrilFatfaceRegular';
    color: rgb(211, 205, 205);
    background-color: white;
`;

const SkillDiv = styled.div`
    margin-top: 48px;
    width: 240px;
    height: 50px;
    display: flex;
    background-color: white;
`;

const IconDiv = styled.div`
    margin: 0 auto;
    display: flex;
    position: relative;
    width: 50px;
    height: 50px;
    overflow: hidden;
`;

export default ProfileClient;
