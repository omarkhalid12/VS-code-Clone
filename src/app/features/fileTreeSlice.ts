import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFile } from "../../interfaces";

interface IClickedFiles {
  filename: string;
  fileContent: string | undefined
}
interface IInitialState {
  activeTabId: string | null
  openedFile: IFile[];
  clickedFile: IClickedFiles;
}

const initialState: IInitialState = {
  activeTabId: null,
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
      state.clickedFile = action.payload
    },
    setActiveTabIdAction : (state, action: PayloadAction<string>) => {
      state.activeTabId = action.payload
    }
  }
})
export const {setOpenedFileAction, setClickedFileAction, setActiveTabIdAction} = fileTreeSlice.actions
export default fileTreeSlice.reducer