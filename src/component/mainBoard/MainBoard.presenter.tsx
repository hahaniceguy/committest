import {Wrapper, TitleMainWrapper, TitleWrapper, Title, Near, Live, ProfileModification, Hr, ProfileImage, ProfileWrapper, Recommendation,
       RecommendationWrapper, Profile, JobCity, HeightSchool, StarWrapper, CancleButton, LikeButton, StarButton, StarImg} from './MaindBoard.styles'

export default function MainBoardUI({handleMoveboardListPage}){
    return(
        <Wrapper>
            <TitleMainWrapper>
                <TitleWrapper>
                    <Title>glam</Title>
                    <Near>근처</Near>
                    <Live>라이브</Live>
                </TitleWrapper>
                <ProfileModification onClick={handleMoveboardListPage}>프로필수정</ProfileModification>
            </TitleMainWrapper>
            <Hr></Hr>
            <ProfileWrapper>
                <ProfileImage src="profile.png"></ProfileImage>
                <RecommendationWrapper>
                    <Recommendation>오늘의 추천</Recommendation>
                    <Profile>이름, 00</Profile>
                    <JobCity>테스트 · 테스트</JobCity>
                    <HeightSchool>123cm · 대학교</HeightSchool>
                </RecommendationWrapper>
                <StarWrapper>
                    <CancleButton>X</CancleButton>
                    <LikeButton>좋아요</LikeButton>
                    <StarButton>
                        <StarImg src="star.png"></StarImg>
                    </StarButton>
                </StarWrapper>
            </ProfileWrapper>
        </Wrapper>
    )
}