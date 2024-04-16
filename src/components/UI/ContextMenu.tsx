import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { setOpenedFileAction } from "../../app/features/fileTreeSlice"

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

  //** Handlers ..
  const closeAll = () => {
    dispatch(setOpenedFileAction([]))
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
      <ul className="py-2 text-black bg-white rounded-md px-7 w-fit"
        style={{position: "absolute",
        left: x , top: y}}
      >
        <li onClick={closeAll}>Close all</li>
        <li>Close</li>
      </ul>
    </div>
  )
}

export default ContextMenu