import { extensionIconPaths } from "../constant"
import IconImg from "./IconImg"
import FileIcon from "./SVG/File"

interface IProps {
  fileName: string
  isFolder?: boolean
  isOpen?: boolean
}

const RenderFileIcons = ({ fileName, isFolder, isOpen } : IProps) => {
  const extension = fileName.split(".").pop()
  if(extension && Object.prototype.hasOwnProperty.call(extensionIconPaths, extension)) {
    const iconPath = isFolder ? 
    isOpen ? 
    `${extensionIconPaths[extension]}-open.svg` 
    : `${extensionIconPaths[extension]}.svg` 
    : `${extensionIconPaths[extension]}.svg`

    return <IconImg src={iconPath}/>
  }

  if(isFolder && isOpen) return <IconImg src="/icons/folder-default-open.svg"/>
  if(isFolder && !isOpen) return <IconImg src="/icons/folder-default.svg"/>

  return <FileIcon />
}

export default RenderFileIcons