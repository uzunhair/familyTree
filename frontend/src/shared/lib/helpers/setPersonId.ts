import {getInitials} from "src/shared/lib/helpers/getInitials";
import {transliterate} from "src/shared/lib/helpers/transliterate";

export const setPersonId = (value:string) => {
  if(value) {
    return `${Date.now()}_${transliterate(getInitials(value))}`;
  }
  return "";
};