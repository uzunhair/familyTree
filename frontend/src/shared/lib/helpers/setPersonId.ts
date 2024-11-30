import {getInitials} from "src/shared/lib/helpers/getInitials";
import {transliterate} from "src/shared/lib/helpers/transliterate";

export const setPersonId = (value:string) => {
  return `${Date.now()}_${transliterate(getInitials(value))}`;
};