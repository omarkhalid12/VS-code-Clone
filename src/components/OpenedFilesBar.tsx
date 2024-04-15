import { RootState } from "../app/store"
import { useSelector } from "react-redux";
import OpenedFilesBarTab from "./OpenedFilesBarTab";


const OpenedFilesBar = () => {
  const {openedFiles} = useSelector((state: RootState) => state.tree);
  return (
    <div>
      <div className="flex items-center border-b-[1px] border-[#ffffff1f]">
        {
          openedFiles.map((file)=> <OpenedFilesBarTab key={file.id} file={file} />)
        }
      </div>
    </div>
  )
}

export default OpenedFilesBar