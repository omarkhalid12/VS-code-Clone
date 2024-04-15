import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFiles {
  filename: string;
  fileContent: string | undefined
}
interface IInitialState {
  openedFile: IFile[];
  clickedFile: IClickedFiles;
}

const initialState: IInitialState = {
  openedFile: [],
  clickedFile: {
    filename: "",
    fileContent: ""
  }
}

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFileAction : (state, action: PayloadAction<IFile[]>) => {
      state.openedFile = action.payload
    },
    setClickedFileAction : (state, action: PayloadAction<IClickedFiles>) => {
      state.clickedFile.filename = action.payload.filename
      state.clickedFile.fileContent = action.payload.fileContent
    }
  }
})
export const {setOpenedFileAction, setClickedFileAction} = fileTreeSlice.actions
export default fileTreeSlice.reducer