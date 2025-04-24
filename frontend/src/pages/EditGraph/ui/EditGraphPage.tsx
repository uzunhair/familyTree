import { Leva } from "leva";
import { ForceGraph3D } from "react-force-graph";
import { useEditGraph } from "../lib/hook/useEditGraph";

export const EditGraphPage = () => {
  const { layoutRef, dimensions, date, search, dagMode } = useEditGraph();

  return (
    <div ref={layoutRef} className="absolute inset-0">
      <Leva fill={false} />
      <ForceGraph3D
        // graphData={red}
        graphData={date}
        width={dimensions.width}
        height={dimensions.height}
        linkDirectionalArrowLength={3}
        linkDirectionalArrowRelPos={0.7}
        nodeColor={(node) => {
          if (search && node.name.toLowerCase().includes(search.toLowerCase())) {
            return "red";
          }
          return "white";
        }}
        nodeOpacity={1}
        // nodeLabel={nodeLabel}
        // @ts-ignore
        // dagMode={dagMode}
        // node объект, название
        // linkColor={(link) => {
        //   if (link.relation === "брат/сестра") return "red";
        //   if (link.relation === "мать = ребенок") return "#22e000";
        //   if (link.relation === "отец = ребенок") return "#1e9208";
        //   return "gray";
        // }}
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
        // nodeCanvasObject={(
        //   node: { name: any; x: number; y: number },
        //   ctx: {
        //     font: string;
        //     measureText: (arg0: any) => { (): any; new (): any; width: any };
        //     fillStyle: string;
        //     fillText: (arg0: any, arg1: number, arg2: any) => void;
        //   },
        //   globalScale: number
        // ) => {
        //   const label = node.name;
        //   const fontSize = 12 / globalScale;
        //   ctx.font = `${fontSize}px Sans-Serif`;
        //   const textWidth = ctx.measureText(label).width;
        //   ctx.fillStyle = "black";
        //   ctx.fillText(label, node.x - textWidth / 2, node.y + fontSize / 2);
        // }}
      />
    </div>
  );
};
