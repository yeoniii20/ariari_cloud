import Button from "../components/button/button";
import Input from "../components/input/input";
import Textarea from "../components/textarea/textarea";
import ToggleBtn from "../components/toggleBtn/toggleBtn";

const Offcampus = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ffe8fb", padding: 100 }}>
        <Input
          title={"동아리 이름"}
          placeholder={"동아리 이름을 입력해주세요"}
          isEdit={false}
          onValueChange={() => {}}
        />
        <Input
          title={"교내 동아리"}
          placeholder={"교내 동아리"}
          isEdit={true}
          onValueChange={() => {}}
        />
        <Textarea
          title={"소개글"}
          placeholder={"소개하고 싶은 내용을 입력해주세요"}
          isEdit={false}
          max={500}
        />
        <Textarea
          title={"소개글"}
          placeholder={"편집 가능한 상태"}
          isEdit={true}
          max={500}
        />
        <ToggleBtn
          title={"모집 현황"}
          btnContent1={"모집 중"}
          btnContent2={"모집 완료"}
          onToggle={() => {}}
        />
      </div>
    </>
  );
};

export default Offcampus;
