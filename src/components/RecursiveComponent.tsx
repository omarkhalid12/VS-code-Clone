import { useState } from "react"
import { IFile } from "../interfaces"
import BottomArrowIcon from "./SVG/Bottom"
import RightArrowIcon from "./SVG/Right"
import RenderFileIcons from "./RenderFileIcons"
import { useDispatch, useSelector } from "react-redux"
import { setClickedFileAction, setOpenedFileAction } from "../app/features/fileTreeSlice"
import { RootState } from "../app/store"
import { isFileObjectExist } from "../utils/functions"

interface IProps {
  fileTree: IFile
}
const RecursiveComponent = ({ fileTree } : IProps) => {
  const {id, name, isFolder, children, content} = fileTree;
  const dispatch = useDispatch();
  const {openedFile} = useSelector((state: RootState) => state.tree);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  
  //** Handlers ..
  const Toggle = ()=> setIsOpen(prev => !prev);
  const onFileClicked = ()=> {
    const exists = isFileObjectExist(openedFile, id);
    dispatch(setClickedFileAction({filename: name, fileContent: content,
      activeTabId: id}));
    if(exists) return ;
    dispatch(setOpenedFileAction([...openedFile, fileTree]));
  }
  
  return (
    <div className="mb-2 ml-1 cursor-pointer">
        <div className="flex items-center mb-1.5" >
          { isFolder ? (
              <div onClick={Toggle} className="flex items-center">
                <span className="mr-2">{isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}</span>
                
                <RenderFileIcons fileName={name} isFolder={isFolder} isOpen={isOpen} />
                <span className="ml-2">{name}</span>
              </div>
            ) : (
              <div className="flex items-center ml-2" onClick={onFileClicked}>
                <RenderFileIcons fileName={name} />
                <span className="ml-2">{name}</span>
              </div>
            )
          }
        </div>
        {isOpen && children && children.map((file, index)=> (
        <RecursiveComponent fileTree={file} key={index} />))}
    </div>
  )
}

export default RecursiveComponent