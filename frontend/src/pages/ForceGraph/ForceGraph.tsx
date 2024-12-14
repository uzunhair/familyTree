import {useEffect, useState} from "react";
import {Leva, useControls} from "leva";
import {ForceGraph2D} from "react-force-graph";
import {GetNodes} from "../../../wailsjs/go/main/App";
import {TLinks, TNode} from "src/pages/ForceGraph/lib/types/types";
import {brotherAndSister} from "src/pages/ForceGraph/lib/utils/brotherAndSister";

export const ForceGraph = () => {
  const [nodes, setNodes] = useState<TNode[]>([]);
  const {nodeLabel, father, mother, brotherAndSisterControl} = useControls({
    nodeLabel: {
      value: "name",
      label: "Заголовок",
      options: {"ФИО":"name", "ID":"id"},
    },
    father: {
      label: "Отец",
      value: true
    },
    mother: {
      label: "Мать",
      value: true
    },
    brotherAndSisterControl: {
      label: "Брат/Сестра",
      value: true
    },
  }, {});

  const links = nodes.reduce<TLinks[]>((acc, item) => {
    if (item?.father && father) {
      acc.push({source: item.id, target: item.father, relation: "отец = ребенок"});
    }
    if (item?.mother && mother) {
      acc.push({source: item.id, target: item.mother, relation: "мать = ребенок"});
    }
    return acc;
  }, []);

  const brotherAndSisterLinks = brotherAndSisterControl ? brotherAndSister({ nodes }) : [];

  const date = {
    "nodes": nodes,
    "links": [...links, ...brotherAndSisterLinks]
  };
  
  useEffect(() => {
    GetNodes().then((result) => {
      // console.log("res", result);
      setNodes(result);
    });
  }, []);

  return (
    <div>
      <Leva />
      <ForceGraph2D
        graphData={date}
        nodeLabel={nodeLabel}
      />
    </div>
  );
};