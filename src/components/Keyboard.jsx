import Key from "./Key";

const Keyboard = () => {
  return (
    <div className="flex-col md:mt-15 font-main">
      <div className="flex gap-2 items-center justify-center">
        <Key value="Q" />
        <Key value="W" />
        <Key value="E" />
        <Key value="R" />
        <Key value="T" />
        <Key value="Y" />
        <Key value="U" />
        <Key value="I" />
        <Key value="O" />
        <Key value="P" />
      </div>
      <div className="flex gap-2 my-2 items-center justify-center">
        <Key value="A" />
        <Key value="S" />
        <Key value="D" />
        <Key value="F" />
        <Key value="G" />
        <Key value="H" />
        <Key value="J" />
        <Key value="K" />
        <Key value="L" />
        <Key value={<i className="fa-solid fa-delete-left" />} />
      </div>
      <div className="flex gap-2 my-2 items-center justify-center">
        <Key value="Z" />
        <Key value="X" />
        <Key value="C" />
        <Key value="V" />
        <Key value="B" />
        <Key value="N" />
        <Key value="M" />
        <Key value="ENTER" className="w-40" />
      </div>
    </div>
  );
};

export default Keyboard;
