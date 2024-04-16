import { RootState } from "../app/store"
import { useSelector } from "react-redux";
import OpenedFilesBarTab from "./OpenedFilesBarTab";
import FileSyntaxHighlighter from "./FileSyntaxHighlighter";


const OpenedFilesBar = () => {
  const {openedFile, clickedFile} = useSelector((state: RootState) => state.tree);
  return (
    <div>
      <div className="flex items-center border-b-[1px] border-[#ffffff1f]">
        {
          openedFile.map((file)=> <OpenedFilesBarTab key={file.id} file={file} />)
        }
      </div>
      <FileSyntaxHighlighter content={clickedFile.fileContent} />
    </div>
  )
}

export default OpenedFilesBar