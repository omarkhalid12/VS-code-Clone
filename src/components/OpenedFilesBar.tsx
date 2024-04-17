import { RootState } from "../app/store"
import { useSelector } from "react-redux";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import { useState } from "react";
import ContextMenu from "./UI/ContextMenu";


const OpenedFilesBar = () => {
  const {openedFile} = useSelector((state: RootState) => state.tree);
  const [showMenu, setShowMenu] = useState(false)
  const [menuPosition, setMenuPosition] = useState<{x: number, y: number}>({x: 0, y: 0})
  
  return (
    <div className="w-full">
      <div 
      className="flex items-center border-b-[1px] border-[#ffffff1f]" 
      onContextMenu={e => {
        e.preventDefault()
        setMenuPosition({x: e.clientX, y: e.clientY})
        setShowMenu(true)
      }}
      >
        {
          openedFile.map(file => (<OpenedFilesBarTab key={file.id} file={file} />))
        }
      </div>
      { showMenu && <ContextMenu positions={menuPosition} setShowMenu={setShowMenu}/> }
    </div>
  )
}

export default OpenedFilesBar