import {Wrapper, ContentWrapper, Title, SemiTitle, ApiKeyBox, SearchWrapper, Make} from './hce.styles'
import SideBar from '../sidebar/SideBar.container'
import style from '../Css/Main.module.css';

export default function BoardPageUI(){

    return(
      <Wrapper>
        <SideBar/>
        <ContentWrapper>
          <Title>Choose your vehicle</Title>
          <SemiTitle>Note: This demo contains a small sample of available parts. Try searching E36</SemiTitle>
          <ApiKeyBox>Please enter an API key before continuing</ApiKeyBox>
          <div className={style.brown}>clear</div>
          <SearchWrapper>
            <Make></Make>
          </SearchWrapper>
        </ContentWrapper>
      </Wrapper>
    )
}