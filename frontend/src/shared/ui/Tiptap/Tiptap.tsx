import React from "react";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { MenuBar } from "src/shared/ui/Tiptap/MenuBar";
import { BubbleMenu } from "./BubbleMenu";
import { FloatingMenu } from "./FloatingMenu";
import styles from "./Tiptap.module.scss";

type TProp = {
  content: string;
  onUpdate: any;
};

const extensions = [StarterKit];
const editorProps = {
  attributes: {
    class: `prose prose-sm sm:prose-base mb-5 focus:outline-none ${styles.tiptap}`,
  },
};

export const Tiptap = ({ content, onUpdate }: TProp) => {
  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      editorProps={editorProps}
      onUpdate={({ editor }) => {
        onUpdate(editor.getHTML());
      }}
      slotBefore={<MenuBar />}
    >
      <BubbleMenu show={false} />
      <FloatingMenu show={false} />
    </EditorProvider>
  );
};
