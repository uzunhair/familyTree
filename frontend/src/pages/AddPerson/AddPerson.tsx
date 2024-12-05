import {LayoutMain} from "src/widgets/template/LayoutMain";
import {AddPersonForm} from "./AddPersonForm";

function AddPerson() {
  return (
    <LayoutMain title="Добавить человека">
      <div className="intro-y col-span-12 lg:col-span-6">
        <AddPersonForm/>
      </div>
    </LayoutMain>
  );
}

export default AddPerson;