import OpenedFilesBar from "./components/OpenedFilesBar";
import RecursiveComponent from "./components/RecursiveComponent";
import { fileTree } from "./data/fileTree";

const App = () => {
  return (
    <div className="flex h-screen">
      <div className="w-64 border border-r-white">
        <RecursiveComponent fileTree={fileTree}/>
      </div>
        <OpenedFilesBar />
    </div>
  );
};

export default App;
