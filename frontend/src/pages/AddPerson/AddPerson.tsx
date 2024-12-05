import {AddUser} from "src/shared/ui/AddUser";
import {LayoutMain} from "src/widgets/template/LayoutMain";

function AddPerson() {
  return (
    <LayoutMain title="Добавить человека">
      <div className="intro-y col-span-12 lg:col-span-6">
        <AddUser/>
      </div>
    </LayoutMain>
  );
}

export default AddPerson;