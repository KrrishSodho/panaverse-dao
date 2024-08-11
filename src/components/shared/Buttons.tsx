// Color bg-[#e67e22]

const Buttons = (props: any) => {
  return (
    <div>
      <button className=" bg-lime-600 text-white font-bold rounded-[9px] py-3 px-8 hover:bg-lime-700">
        {props.name}
      </button>
    </div>
  );
};

export default Buttons;
