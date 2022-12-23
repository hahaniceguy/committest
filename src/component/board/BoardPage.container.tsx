import BoardPageUI from './BoardPage.presenter'
import arrData from "../dummy.json"

export default function BoardPage() {

  const dummy = arrData.data.search[0];
  console.log(dummy)

  const count = 1;

  const handleClickPlus = () => {
    count + 1
  }

  return(
        <>
            <BoardPageUI></BoardPageUI>
        </>
    )
}