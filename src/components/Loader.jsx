import { loader } from "../assets";

const Loader = ({ title }) => (
  <div className="grid place-items-center mt-12">
    <img src={loader} alt="Loader" className="w-32 animate-spin" />
    <h2 className="py-4 font-bold">{ title || "Loading" }</h2>
  </div>
);

export default Loader;
