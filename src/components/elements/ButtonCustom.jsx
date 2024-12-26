
const ButtonCustom = ({type, customClassname, childred, onClick}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-[60%] mt-3 text-center text-white py-2 px-4 rounded-full  transition-colors duration-300 ${customClassname}`}
    >
      {childred}
    </button>
  );
}

export default ButtonCustom