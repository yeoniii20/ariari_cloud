import MiniSearch from "../components/miniSearch/miniSearch";
import Select from "../components/select/select";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
];

const Oncampus = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ffe8fb", padding: 100 }}>
        <div>onCampus</div>
        <Select
          title={"동아리 분류"}
          placeholder={"동아리 분류를 선택해주세요"}
          options={options}
          isEdit={true}
        />

        <MiniSearch
          onClick={() => {
            console.log("clicked");
          }}
          text={"세종대학교 발레 동아리"}
        />

        <MiniSearch
          onClick={() => {
            console.log("clicked");
          }}
        />
      </div>
    </>
  );
};

export default Oncampus;
