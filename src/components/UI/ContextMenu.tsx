import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setOpenedFileAction } from "../../app/features/fileTreeSlice"
import { RootState } from "../../app/store"

interface IProps {
  setShowMenu: (val: boolean)=> void,
  positions: {
    x: number,
    y: number
  }
}
const ContextMenu = ({ positions: {x, y}, setShowMenu }: IProps) => {
  const dispatch = useDispatch()
  const menuRef = useRef<HTMLDivElement>(null);

  const { openedFile, tabIdToRemove } = useSelector((state: RootState)=> state.tree)
  
  //** Handlers ..
  const onClose = () => {
    const filtered = openedFile.filter(file => file.id !== tabIdToRemove);
    dispatch(setOpenedFileAction(filtered))
    setShowMenu(false)
  }
  const onCloseAll = () => {
    dispatch(setOpenedFileAction([]))
    setShowMenu(false)
  }
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if(menuRef.current && menuRef.current.contains(event?.target as Node)) {
        setShowMenu(false)
      }
    }
    window.addEventListener("click", handleClickOutside)
    return () => {
      window.removeEventListener("click", handleClickOutside)
    }
  }, [setShowMenu])
  
  return (
    <div ref={menuRef}>
      <ul
        className="z-10 w-32 p-2 origin-top-right bg-gray-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        style={{
          position: "absolute",
          left: x,
          top: y,
        }}
      >
        <li
          className="block px-4 py-2 text-sm text-gray-400 duration-300 rounded-sm cursor-pointer hover:bg-gray-700"
          role="menuitem"
          onClick={onClose}
        >
          Close
        </li>
        <li
          className="block px-4 py-2 text-sm text-gray-400 duration-300 rounded-sm cursor-pointer hover:bg-gray-700"
          role="menuitem"
          onClick={onCloseAll}
        >
          Close All
        </li>
      </ul>
    </div>
  )
}

export default ContextMenu