import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFiles {
  activeTabId: string | null
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
    activeTabId: null,
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
      state.clickedFile = action.payload
    },
  }
})
export const {setOpenedFileAction, setClickedFileAction} = fileTreeSlice.actions
export default fileTreeSlice.reducer