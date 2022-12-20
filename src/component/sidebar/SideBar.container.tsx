import SideBarUI from './SideBar.presenter'
import { useState } from 'react';

export default function SideBar() {
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    return(<div>end</div>)
  }

  const onClickMenu = () => (
    setOpen((prev) => !prev)
  )

    return(
        <>
            <SideBarUI open={open} onClickMenu={onClickMenu}></SideBarUI>
        </>
    )
}