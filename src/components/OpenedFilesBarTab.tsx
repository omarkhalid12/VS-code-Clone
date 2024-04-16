import { useDispatch, useSelector } from "react-redux"
import { IFile } from "../interfaces"
import RenderFileIcons from "./RenderFileIcons"
import CloseIcon from "./SVG/CloseIcon"
import { setClickedFileAction, setOpenedFileAction, setTabIdToRemoveAction } from "../app/features/fileTreeSlice"
import { RootState } from "../app/store"

interface IProps {
  file: IFile
}
const OpenedFilesBarTab = ({ file } : IProps) => {
  const dispatch = useDispatch()
  const {openedFile, clickedFile: {activeTabId}} = useSelector((state: RootState)=> state.tree)

  //** Handlers ..
  const onClick = ()=> {
    const {id, name, content} = file;
    dispatch(setClickedFileAction({filename: name, fileContent: content,
      activeTabId: id}));
  }
  const onRemove = (selectedId: string)=> {
    const filtered = openedFile.filter(file => file.id !== selectedId);
    const lastTab = filtered[filtered.length - 1];
    
    if(!lastTab) {
      dispatch(setOpenedFileAction([]));
      dispatch(setClickedFileAction({activeTabId: null,filename: "", fileContent: ""}));
      return ;
    }
    const { id, name, content} = lastTab;
    dispatch(setOpenedFileAction(filtered));
    dispatch(setClickedFileAction({activeTabId: id,filename: name, fileContent: content}));
  }
  
  return (
    <div className={`flex items-center p-2 border-t-2
        ${file.id === activeTabId ? "border-[#cf6ccf]" : "border-transparent"}`} 
      onClick={onClick}
      onContextMenu={e => {
        e.preventDefault()
        dispatch(setTabIdToRemoveAction(file.id))
      }}
    >
      <RenderFileIcons fileName={file.name} />
        <span className="flex items-center justify-center p-1 mx-2 duration-300 rounded-md cursor-pointer w-fit">
          <li>{file.name}</li>
        </span>
        <span className="flex cursor-pointer hover:bg-[#64646473] duration-300 justify-center items-center w-fit mr-2 p-1 rounded-md"
        onClick={e => {
          e.stopPropagation();
          onRemove(file.id)
        }}
        >
          <CloseIcon />
        </span>
    </div>
  )
}

export default OpenedFilesBarTab