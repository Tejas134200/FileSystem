import { useState } from "react";

type FileNodeType = {
  name: string;
  type: "file" | "folder";
  children?: FileNodeType[];
};

export default function FileNode({
  node,
  level = 0,
}: {
  node: FileNodeType;
  level?: number;
}) {
  const [open, setOpen] = useState(false);

  const isFolder = node.type === "folder";

  return (
    <div>
      <div
        onClick={() => isFolder && setOpen(!open)}
        style={{ paddingLeft: `${level * 18}px` }}
        className="node"
      >
        {isFolder ? (open ? "📂" : "📁") : "📄"} {node.name}
      </div>

      {isFolder &&
        open &&
        node.children?.map((child) => (
          <FileNode
            key={`${child.name}-${level}`}
            node={child}
            level={level + 1}
          />
        ))}
    </div>
  );
}