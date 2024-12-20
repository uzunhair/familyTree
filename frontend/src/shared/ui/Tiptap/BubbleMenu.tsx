import React from "react";
import { BubbleMenu as BubbleMenuInit, useCurrentEditor } from "@tiptap/react";
import styles from "src/shared/ui/Tiptap/Tiptap.module.scss";

type TProps = {
  show: boolean;
};

export const BubbleMenu = ({ show }: TProps) => {
  const { editor } = useCurrentEditor();

  if (!editor || !show) {
    return null;
  }

  return (
    <BubbleMenuInit className={styles.bubbleMenu} tippyOptions={{ duration: 100 }} editor={editor}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        Italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        Strike
      </button>
    </BubbleMenuInit>
  );
};
