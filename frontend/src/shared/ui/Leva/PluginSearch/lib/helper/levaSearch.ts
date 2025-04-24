import { createPlugin } from "leva/plugin";
import { TNode } from "src/pages/ForceGraph/lib/types/types";
import { LevaSearch } from "src/shared/ui/Leva/PluginSearch/ui/LevaSearch";
import type { LevaInputProps } from "leva/plugin";

type Options = { options: TNode[] };
type MaxLength = { maxLength?: number };
type TextInputSettings = MaxLength & { options: string[] };
type TextInputType = { text: string };
export type TextInputProps = LevaInputProps<TextInputType, TextInputSettings, string>;

const normalize = ({ text, maxLength, options }: TextInputType & Options & MaxLength) => {
  const namesArray = options.map((obj) => obj?.name);

  return { value: { text }, settings: { maxLength, options: namesArray } };
};

const sanitize = (v: string): TextInputType => {
  return { text: v };
};

const format = (v: TextInputType) => v.text;

export const levaSearch = createPlugin({
  sanitize,
  format,
  normalize,
  component: LevaSearch,
});
