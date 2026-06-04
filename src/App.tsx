import "./App.css";
import FileNode from "./components/FileNode";
import fileTree from "./data/fileTree.json";

function App() {
  return (
    <div className="explorer">
      <h3>EXPLORER</h3>
      <FileNode node={fileTree} />
    </div>
  );
}

export default App;