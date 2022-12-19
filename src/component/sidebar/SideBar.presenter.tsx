import {Wrapper, Menu} from "./SideBar.style"

export default function SideBarUI({open, onClickMenu}){
  return(
    <Wrapper>
      {!open ? (
        <>
          <Menu onClick={onClickMenu} style={{backgroundColor: "white", color:"#2e8fc3"}}>Home</Menu>
          {/* <Menu onClick={onClickMenu} style={{backgroundColor: "white", color:"#2e8fc3"}}>Headless Commerce Example</Menu>
          <Menu onClick={onClickMenu} style={{backgroundColor: "white", color:"#2e8fc3"}}>Vehicle definition query</Menu>
          <Menu onClick={onClickMenu} style={{backgroundColor: "white", color:"#2e8fc3"}}>Get part information</Menu>
          <Menu onClick={onClickMenu} style={{backgroundColor: "white", color:"#2e8fc3"}}>Search part brands</Menu>
          <Menu onClick={onClickMenu} style={{backgroundColor: "white", color:"#2e8fc3"}}>MMY vehicle selector</Menu>
          <Menu onClick={onClickMenu} style={{backgroundColor: "white", color:"#2e8fc3"}}>Ymm vehicle selector</Menu> */}
        </>
        ) : (
          <>
            <Menu onClick={onClickMenu}>Home</Menu>
            {/* <Menu onClick={onClickMenu}>Headless Commerce Example</Menu>
            <Menu onClick={onClickMenu}>Vehicle definition query</Menu>
            <Menu onClick={onClickMenu}>Get part information</Menu>
            <Menu onClick={onClickMenu}>Search part brands</Menu>
            <Menu onClick={onClickMenu}>MMY vehicle selector</Menu>
            <Menu onClick={onClickMenu}>Ymm vehicle selector</Menu> */}
          </>
                    )}
            <Menu onClick={onClickMenu}>Headless Commerce Example</Menu>
            <Menu onClick={onClickMenu}>Vehicle definition query</Menu>
            <Menu onClick={onClickMenu}>Get part information</Menu>
            <Menu onClick={onClickMenu}>Search part brands</Menu>
            <Menu onClick={onClickMenu}>MMY vehicle selector</Menu>
            <Menu onClick={onClickMenu}>Ymm vehicle selector</Menu>
      {/* <Menu>Home</Menu> */}
    </Wrapper>
  )
}