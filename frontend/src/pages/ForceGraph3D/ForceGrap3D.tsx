import { useEffect, useState } from "react";
import { Leva, useControls } from "leva";
import { ForceGraph3D } from "react-force-graph";
import { TLinks, TNode } from "src/pages/ForceGraph/lib/types/types";
import { brotherAndSister } from "src/pages/ForceGraph/lib/utils/brotherAndSister";
import { GetNodes } from "../../../wailsjs/go/main/App";

export const ForceGraph3DPage = () => {
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
        value: false,
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
      <ForceGraph3D
        graphData={date}
        // backgroundColor="#24CAFF"
        nodeLabel={nodeLabel}
        // @ts-ignore
        dagMode={dagMode}
        // node объект, название
        // linkColor={(link) => {
        //   if (link.relation === "брат/сестра") return "red";
        //   if (link.relation === "мать = ребенок") return "#22e000";
        //   if (link.relation === "отец = ребенок") return "#1e9208";
        //   return "gray";
        // }}
        linkDirectionalArrowLength={3}
        linkDirectionalArrowRelPos={0.7}
        // dagMode="zout"
        nodeAutoColorBy="relation"
        // linkColor={(link) => {
        //   if (link.relation === "брат/сестра") return "red";
        //   if (link.relation === "мать = ребенок") return "red";
        //   if (link.relation === "брат/сестра") return "#22e000";
        //   return "gray";
        // }}
        // nodeThreeObject={(node: TNode) => {
        //   const sprite = new SpriteText(node.name);
        //   sprite.color = getColor(node.familyGroup);
        //   sprite.textHeight = 5;
        //   return sprite;
        // }}
        // linkThreeObjectExtend={true} // Позволяет расширять существующие объекты связей
        // linkThreeObject={(link: TLink) => {
        //   // Создаем текстовую метку для связи
        //   const sprite = new SpriteText(link.relation || "");
        //   sprite.color = "#fff";
        //   sprite.textHeight = 3;
        //   return sprite;
        // }}
        // linkPositionUpdate={(sprite, { start, end }) => {
        //   // Обновляем позицию текста на середину линии
        //   const middlePos = {
        //     x: (start.x + end.x) / 2,
        //     y: (start.y + end.y) / 2,
        //     z: (start.z + end.z) / 2,
        //   };
        //   Object.assign(sprite.position, middlePos);
        // }}
        nodeCanvasObject={(
          node: { name: any; x: number; y: number },
          ctx: {
            font: string;
            measureText: (arg0: any) => { (): any; new (): any; width: any };
            fillStyle: string;
            fillText: (arg0: any, arg1: number, arg2: any) => void;
          },
          globalScale: number
        ) => {
          const label = node.name;
          const fontSize = 12 / globalScale;
          ctx.font = `${fontSize}px Sans-Serif`;
          const textWidth = ctx.measureText(label).width;
          ctx.fillStyle = "black";
          ctx.fillText(label, node.x - textWidth / 2, node.y + fontSize / 2);
        }}
      />
    </div>
  );
};
