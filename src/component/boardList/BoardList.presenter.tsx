import {Wrapper, ProfileImgWrapper, ProfilePlus, ProfileImgBox, ProfileText, ProfileTextStrong, ProfileTextWrapper, ProfileContentWrapper,
    ProfileWrapper, ProfileDetailWrapper, NickNameText, SexBox, BirthDay, Location, NickNameDetail, SexDetail,
    BirthDayDetail, LocationDetail, IntroductionWrapper, Introduction, Charm, CharmLimit, BodyShapeWrapper, StatureWrapper, Stature, 
    BoddyShape, StatureDetailWrapper, StatureDetail, BoddyShapeDetail, CareerMainWrapper, CareerWrapper, Job, Occupation, Academic, School, CareerWrapperDetail,
    JobDetail, OccupationDetail, AcademicDetail, SchoolDetail, EtcMainWrapper, EtcWrapper, Personality, Religion, Drinking, Smoking, BloodType, Ethnicity,
    EtcDetailWrapper, PersonalityDetail, ReligionDetail, DrinkingDetail, SmokingDetail, BloodTypeDetail, EthnicityDetail, CharmPoint, CharmPointDetail,
    Interest, IntersetDetail, LifeStyle, LifeStyleDetatil} from './BoardList.styles'

export default function BoardListUI(){
    return(
        <Wrapper>
                <ProfileImgWrapper>
                    <ProfileImgBox
                    src="/profile.png"
                    ></ProfileImgBox>
                    <ProfileImgBox
                    src="/profile.png"
                    ></ProfileImgBox>
                    <ProfileImgBox
                    src="/profile.png"
                    ></ProfileImgBox>
                </ProfileImgWrapper>
                <ProfileImgWrapper>
                    <ProfileImgBox
                    src="/profile.png"
                    ></ProfileImgBox>
                    <ProfileImgBox
                    src="/profile.png"
                    ></ProfileImgBox>
                    <ProfileImgBox
                    src="/profile.png"
                    ></ProfileImgBox>
                </ProfileImgWrapper>
                <ProfileTextWrapper>
                    <ProfileText>다양한 매력을 보여줄 수 있는 사진을 올려주세요 </ProfileText>
                    <ProfileTextStrong  style={{fontWeight:600}}>더 알아보기</ProfileTextStrong>
                </ProfileTextWrapper>
            <ProfileContentWrapper>
                <ProfileWrapper>
                    <NickNameText>닉네임</NickNameText>
                    <SexBox>성별</SexBox>
                    <BirthDay>생일</BirthDay>
                    <Location>위치</Location>
                </ProfileWrapper>
                <ProfileDetailWrapper>
                    <NickNameDetail>Test</NickNameDetail>
                    <SexDetail>남성</SexDetail>
                    <BirthDayDetail>1234-12-12</BirthDayDetail>
                    <LocationDetail>서울특별시</LocationDetail>                   
                </ProfileDetailWrapper>
            </ProfileContentWrapper>
            <IntroductionWrapper>
                <Introduction>소개</Introduction>
                <Charm placeholder="회원님의 매력을 간단하게 소개해주세요"></Charm>
                <CharmLimit>SNS 아이디 등 연락처 입력 시 서비스 이용 제한됩니다</CharmLimit>
            </IntroductionWrapper>
            <BodyShapeWrapper>
                <StatureWrapper>
                    <Stature>키</Stature>
                    <BoddyShape>체형</BoddyShape>
                </StatureWrapper>
                <StatureDetailWrapper>
                    <StatureDetail>177cm</StatureDetail>
                    <BoddyShapeDetail>통통</BoddyShapeDetail>
                </StatureDetailWrapper>
            </BodyShapeWrapper>
            <CareerMainWrapper>
                <CareerWrapper>
                    <Job>직장</Job>
                    <Occupation>직업</Occupation>
                    <Academic>학력</Academic>
                    <School>학교</School>
                </CareerWrapper>
                <CareerWrapperDetail>
                    <JobDetail placeholder="입력해주세요"></JobDetail>
                    <OccupationDetail>기타</OccupationDetail>
                    <AcademicDetail>전문대</AcademicDetail>
                    <SchoolDetail placeholder="입력해주세요"></SchoolDetail>
                </CareerWrapperDetail>
            </CareerMainWrapper>
            <EtcMainWrapper>
                <EtcWrapper>
                    <Personality>성격</Personality>
                    <Religion>종교</Religion>
                    <Drinking>음주</Drinking>
                    <Smoking>흡연</Smoking>
                    <BloodType>혈액형</BloodType>
                    <Ethnicity>인종</Ethnicity>
                </EtcWrapper>
                <EtcDetailWrapper>
                    <PersonalityDetail placeholder="선택해주세요"></PersonalityDetail>
                    <ReligionDetail>기독교</ReligionDetail>
                    <DrinkingDetail>안 함</DrinkingDetail>
                    <SmokingDetail>자주</SmokingDetail>
                    <BloodTypeDetail placeholder="선택해주세요"></BloodTypeDetail>
                    <EthnicityDetail placeholder="선택해주세요"></EthnicityDetail>
                </EtcDetailWrapper>
            </EtcMainWrapper>
            <CharmPoint>매력 포인트</CharmPoint>
            <CharmPointDetail placeholder="입력해주세요"></CharmPointDetail>
            <Interest>관심사</Interest>
            <IntersetDetail placeholder="입력해주세요"></IntersetDetail>
            <LifeStyle>라이프 스타일</LifeStyle>
            <LifeStyleDetatil placeholder="입력해주세요"></LifeStyleDetatil>
        </Wrapper>
    );
}