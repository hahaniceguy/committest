import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`

export const ContentWrapper = styled.div`
  width: 70%;
  height: 100%;
`

export const Title = styled.div`
  font-size: 42px;
  font-weight: 670;
  line-height: 48px;
  margin: 40px 0;
  display: flex;
  justify-content: center;
`

export const MmySelectWrapper = styled.div`
  width: 100%;
  display: block;
  display: flex;
  justify-self: right;
  flex-direction: row;
`

export const Make = styled.select`
  min-width: 20%;
  width: 25%;
  margin: 5px;
  padding: 2px 10px;
  border: 2px solid #a9a9a9;
  border-radius: 7px;
  background-color: #ffffff;
`

export const Model = styled.select`
  min-width: 20%;
  width: 25%;
  margin: 5px;
  padding: 2px 10px;
  border: 2px solid #a9a9a9;
  border-radius: 7px;
  background-color: #ffffff;
`

export const Year = styled.select`
  min-width: 20%;
  width: 25%;
  margin: 5px;
  padding: 2px 10px;
  border: 2px solid #a9a9a9;
  border-radius: 7px;
  background-color: #ffffff;
`

export const SearchButton = styled.div`
  min-width: 10%;
  margin: 5px;
  background-color: #005580;
  height: 40px;
  font-size: 18px;
  padding: 2px 10px;
  border: 2px solid #005580;
  border-radius: 7px;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  align-items: center;
  &:hover{
    background-color: #006a9f;
  }
`
