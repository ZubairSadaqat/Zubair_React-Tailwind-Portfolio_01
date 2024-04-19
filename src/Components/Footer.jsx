import logo from "../assets/name.png";

const Footer = () => {
  return (
    <div className=" max-w-[1200px] sm:h-auto p-12 flex justify-between mx-auto">
      {/* <span className="primary-color"> Zubair</span> */}
      <img className="" src={logo} width={150} height={150} alt="" />
      <p className="text-gray-600 my-auto">
        {" "}
        Zubairsadaqat714@gmail.com
        <br /> @React_Dev_2024
      </p>
    </div>
  );
};

export default Footer;
