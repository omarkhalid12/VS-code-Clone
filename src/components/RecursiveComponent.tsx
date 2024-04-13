import { useState } from "react"
import { IFile } from "../interfaces"
import BottomArrowIcon from "./SVG/Bottom"
import RightArrowIcon from "./SVG/Right"
import RenderFileIcons from "./RenderFileIcons"

interface IProps {
  fileTree: IFile
}
const RecursiveComponent = ({ fileTree: {name, isFolder, children} } : IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  
  const Toggle = ()=> setIsOpen(prev => !prev)
  return (
    <div className="mb-2 ml-2 cursor-pointer">
        <div className="flex items-center mb-1" >
          { isFolder ? (
              <div onClick={Toggle} className="flex items-center">
                <span className="mr-1">{isOpen ? <BottomArrowIcon /> : <RightArrowIcon />}</span>
                
                {/* <FolderIcon /> */}
                <RenderFileIcons fileName={name} isFolder={isFolder} isOpen={isOpen} />
                <span className="ml-1">{name}</span>
              </div>
            ) : (
              <div className="flex items-center ml-2">
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