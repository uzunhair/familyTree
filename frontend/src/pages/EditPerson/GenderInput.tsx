import {Controller} from "react-hook-form";
import {GENDER} from "src/shared/lib/helpers/getGender";
import {TextInputSelect} from "src/shared/ui/TextInputSelect";

type TProps = {
  control: any;
}

export const GenderInput = ({ control }: TProps) => (
  <Controller
    name="gender"
    control={control}
    render={({field: {value, onChange}, fieldState: {error}}) => (
      <TextInputSelect
        label="Пол"
        value={value}
        inputValue={value?.title}
        data={GENDER}
        onChange={onChange}
        error={error}
        onlySelect
        className="mt-4 col-span-12 lg:col-span-6"
        style={{
          borderWidth: "1px",
          padding: ".5rem .75rem",
          textAlign: "left",
        }}
      />
    )}
  />
);