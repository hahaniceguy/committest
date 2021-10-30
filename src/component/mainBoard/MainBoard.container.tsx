import MainBoardUI from './MainBoard.presenter'
import {useRouter} from 'next/router';
 

export default function MainBoard() {

    const router = useRouter()

    const handleMoveboardListPage = () => {
        router.push(`/board`);
    };

    return(
        <>
            <MainBoardUI handleMoveboardListPage={handleMoveboardListPage}></MainBoardUI>
        </>
    )
}