import { useEffect, useRef, useState } from "react";
import { folder, useControls } from "leva";
import { TLinks, TNode } from "src/pages/ForceGraph/lib/types/types";
import { brotherAndSister } from "src/pages/ForceGraph/lib/utils/brotherAndSister";
import { levaSearch } from "src/shared/ui/Leva/PluginSearch/lib/helper/levaSearch";
import { GetNodes } from "../../../../../wailsjs/go/main/App";

export const useEditGraph = () => {
  const layoutRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [nodes, setNodes] = useState<TNode[]>([]);

  useEffect(() => {
    const updateDimensions = () => {
      if (layoutRef.current) {
        const rect = layoutRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  const [{ nodeLabel, father, mother, brotherAndSisterControl, search, dagMode }] = useControls(
    () => ({
      nodeLabel: {
        value: "name",
        label: "Заголовок",
        options: { "ФИО ": "name", ID: "id" },
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
      "Поиск ": folder({
        key: {
          label: "Key",
          value: "name",
          options: {
            id: "id",
            name: "name",
            gender: "gender",
            father: "father",
            mother: "mother",
            spouse: "spouse",
            friends: "friends",
            colleagues: "colleagues",
            familiar: "familiar",
          },
        },
        search: levaSearch({
          label: "Поиск",
          options: nodes,
          text: "",
        }),
      }),
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
    }),
    [nodes]
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
      console.log("res", result);
      setNodes(result);
    });
  }, []);

  return {
    layoutRef,
    date,
    dimensions,
    nodeLabel,
    father,
    mother,
    brotherAndSisterControl,
    search: search.text,
    dagMode,
  };
};
