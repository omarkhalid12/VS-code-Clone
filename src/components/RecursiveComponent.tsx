import { useState } from "react"
import { IFile } from "../interfaces"
import BottomArrowIcon from "./SVG/Bottom"
import RightArrowIcon from "./SVG/Right"
import RenderFileIcons from "./RenderFileIcons"
import { useDispatch, useSelector } from "react-redux"
import { setOpenedFiles } from "../app/features/fileTreeSlice"
import { RootState } from "../app/store"
import { isFileObjectExist } from "../utils/functions"

interface IProps {
  fileTree: IFile
}
const RecursiveComponent = ({ fileTree } : IProps) => {
  const {id, name, isFolder, children} = fileTree;
  const dispatch = useDispatch();
  const {openedFiles} = useSelector((state: RootState) => state.tree);
  const [isOpen, setIsOpen] = useState<boolean>(true);
  
  //** Handlers ..
  const Toggle = ()=> setIsOpen(prev => !prev);
  const onFileClicked = ()=> {
    const exists = isFileObjectExist(openedFiles, id);
    if(exists) return ;
    dispatch(setOpenedFiles([...openedFiles, fileTree]));
  }
  
  return (
    <div className="mb-2 ml-2 cursor-pointer">
        <div className="flex items-center mb-1" >
          { isFolder ? (
              <div onClick={Toggle} className="flex items-center">
                <span className="mr-1">{isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}</span>
                
                <RenderFileIcons fileName={name} isFolder={isFolder} isOpen={isOpen} />
                <span className="ml-1">{name}</span>
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