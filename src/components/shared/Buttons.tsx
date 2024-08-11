const Buttons = (props) => {
  return (
    <div>
      <button className="bg-[#e67e22] text-white font-bold rounded-[9px] py-3 px-8 hover:bg-[#cf711f]">
        {props.name}
      </button>
    </div>
  );
};

export default Buttons;
