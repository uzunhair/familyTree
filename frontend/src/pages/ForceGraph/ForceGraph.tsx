import { useEffect, useState } from "react";
import { Leva, useControls } from "leva";
import { ForceGraph2D } from "react-force-graph";
import { TLinks, TNode } from "src/pages/ForceGraph/lib/types/types";
import { brotherAndSister } from "src/pages/ForceGraph/lib/utils/brotherAndSister";
import { GetNodes } from "../../../wailsjs/go/main/App";

export const ForceGraph = () => {
  const [nodes, setNodes] = useState<TNode[]>([]);
  const { nodeLabel, father, mother, brotherAndSisterControl, dagMode } = useControls(
    {
      nodeLabel: {
        value: "name",
        label: "Заголовок",
        options: { ФИО: "name", ID: "id" },
      },
      dagMode: {
        value: "null",
        label: "DagMode",
        options: {
          td: "td",
          bu: "bu",
          lr: "lr",
          rl: "rl",
          radialout: "radialout",
          radialin: "radialin",
        },
      },
      father: {
        label: "Отец",
        value: true,
      },
      mother: {
        label: "Мать",
        value: true,
      },
      brotherAndSisterControl: {
        label: "Брат/Сестра",
        value: true,
      },
    },
    {}
  );

  const links = nodes.reduce<TLinks[]>((acc, item) => {
    if (item?.father && father) {
      acc.push({ source: item.id, target: item.father, relation: "отец = ребенок" });
    }
    if (item?.mother && mother) {
      acc.push({ source: item.id, target: item.mother, relation: "мать = ребенок" });
    }
    return acc;
  }, []);

  const brotherAndSisterLinks = brotherAndSisterControl ? brotherAndSister({ nodes }) : [];

  const date = {
    nodes: nodes,
    links: [...links, ...brotherAndSisterLinks],
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
        dagMode={dagMode}
        // node объект, название
        // nodeCanvasObject={(node, ctx, globalScale) => {
        //   const label = node.name;
        //   const fontSize = 12 / globalScale;
        //   ctx.font = `${fontSize}px Nunito`;
        //   const textWidth = ctx.measureText(label).width;
        //   ctx.fillStyle = "black";
        //   ctx.fillText(label, node.x - textWidth / 2, node.y + fontSize / 2);
        // }}
        // linkColor={(link) => {
        //   if (link.relation === "брат/сестра") return "red";
        //   if (link.relation === "мать = ребенок") return "#22e000";
        //   if (link.relation === "отец = ребенок") return "#1e9208";
        //   return "gray";
        // }}
      />
    </div>
  );
};
