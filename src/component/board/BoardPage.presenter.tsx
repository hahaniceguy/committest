import {Wrapper, ContentWrapper, Title, MmySelectWrapper, Make, Model, Year, SearchButton} from './BoardPage.styles'
import SideBar from '../sidebar/SideBar.container'
import arrData from "../dummy.json"

export default function BoardPageUI(){

    return(
      <Wrapper>
        <SideBar/>
        <ContentWrapper>
          <Title>Vehicle selector (make, model, year)</Title>
          <MmySelectWrapper>
            <Make>
              <option disabled selected>Please select a make</option>
              {arrData.data.search.map((data) => (
                <option>{data.company}</option>
                ))}
            </Make>
            <Model>
                <option disabled selected>Please fill in the other boxes first</option>
                {arrData.data.search.map((data) => {
                  if(data.company === data.company){
                    return(
                      <option>{data.Model}</option>
                    )
                  }
                })

                }
                <option></option>
            </Model>
            <Year>
                <option disabled selected>Please fill in the other boxes first</option>
            </Year>
            <SearchButton>Search for vehicles</SearchButton>
          </MmySelectWrapper>
        </ContentWrapper>
      </Wrapper>
    )
}