import React from "react";
import { FloatingMenu as FloatingMenuInit, useCurrentEditor } from "@tiptap/react";
import styles from "src/shared/ui/Tiptap/Tiptap.module.scss";

type TProps = {
  show: boolean;
};

export const FloatingMenu = ({ show }: TProps) => {
  const { editor } = useCurrentEditor();

  if (!editor || !show) {
    return null;
  }

  return (
    <FloatingMenuInit
      className={styles.floatingMenu}
      tippyOptions={{
        duration: 500,
        placement: "bottom",
        arrow: false,
      }}
      editor={editor}
    >
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        H2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        Bullet list
      </button>
    </FloatingMenuInit>
  );
};
