import { TLinks, TNode } from "src/pages/ForceGraph/lib/types/types";

type TProps = {
  nodes: TNode[];
};

// Создаем массив всех детей для каждого родителя
export const brotherAndSister = ({ nodes }: TProps) => {
  const links: TLinks[] = [];

  const childrenByParent: { [key: string]: string[] } = {};

  nodes.forEach((node) => {
    if (node.father) {
      if (!childrenByParent[node.father]) {
        childrenByParent[node.father] = [];
      }
      childrenByParent[node.father].push(node.id);
    }
    if (node.mother) {
      if (!childrenByParent[node.mother]) {
        childrenByParent[node.mother] = [];
      }
      childrenByParent[node.mother].push(node.id);
    }
  });

  Object.values(childrenByParent).forEach((siblings) => {
    siblings.forEach((sibling, index) => {
      for (let i = index + 1; i < siblings.length; i++) {
        links.push({ source: sibling, target: siblings[i], relation: "брат/сестра" });
      }
    });
  });

  return links;
};
