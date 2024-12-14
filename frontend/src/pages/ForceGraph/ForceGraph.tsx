import {useEffect, useState} from "react";
import {ForceGraph2D} from "react-force-graph";
import {GetNodes} from "../../../wailsjs/go/main/App";

type TNode = {
  id:         string,
  name:       string,
  gender:     string,
  father:     string,
  mother:     string,
  spouse:     string[],
  friends:    string[],
  colleagues: string[],
  familiar:   string[],
}

type TLinks = {
  source: string;
  target: string;
  relation: string;
}

export const ForceGraph = () => {
  const [nodes, setNodes] = useState<TNode[]>([]);

  const links = nodes.reduce<TLinks[]>((acc, item) => {
    if (item?.father) {
      acc.push({source: item.id, target: item.father, relation: "отец = ребенок"});
    }
    // if (item?.children) {
    //   item.children.map((children) => {
    //     acc.push({source: item.id, target: children, relation: "родитель > ребенок"});
    //   });
    // }

    return acc;
  }, []);

  const date = {
    "nodes": nodes,
    "links": links
  };
  
  useEffect(() => {
    GetNodes().then((result) => {
      console.log("res", result);
      setNodes(result);
    });
  }, []);

  return (
    <div>
      <ForceGraph2D
        graphData={date}
      />
    </div>
  );
};