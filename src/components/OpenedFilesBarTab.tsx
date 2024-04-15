import { useDispatch } from "react-redux"
import { IFile } from "../interfaces"
import RenderFileIcons from "./RenderFileIcons"
import CloseIcon from "./SVG/CloseIcon"
import { setClickedFileAction } from "../app/features/fileTreeSlice"

interface IProps {
  file: IFile
}
const OpenedFilesBarTab = ({ file } : IProps) => {
  const dispatch = useDispatch()
  const onClick = ()=> {
    const {name, content} = file
    dispatch(setClickedFileAction({filename: name, fileContent: content}))
  }
  return (
    <div className="flex items-center p-2 border-r-[1px] border-[#ffffff1f]" onClick={onClick}>
      <RenderFileIcons fileName={file.name} />
        <span className="flex items-center justify-center p-1 mx-2 duration-300 rounded-md cursor-pointer w-fit">
          <li>{file.name}</li>
        </span>
        <span className="flex items-center justify-center p-1 mr-2 duration-300 rounded-md cursor-pointer w-fit">
          <CloseIcon />
        </span>
    </div>
  )
}

export default OpenedFilesBarTab