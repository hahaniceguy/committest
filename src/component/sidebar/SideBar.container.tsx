import SideBarUI from './SideBar.presenter'
import { useCallback, useState } from 'react';

export default function SideBar() {
  
  const [open, setOpen] = useState(false);

  const onClickMenu = () => (
    setOpen((prev) => !prev)
  )

    return(
        <>
            <SideBarUI open={open} onClickMenu={onClickMenu}></SideBarUI>
        </>
    )
}