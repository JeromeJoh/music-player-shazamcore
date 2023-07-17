import { BiSolidError } from 'react-icons/bi';

const Error = ({ text }) => (
  <div className="grid place-items-center mt-12 text-brightRed">
    <BiSolidError className='w-10 h-10' />
    <h2 className="py-4 font-bold">
      {text || "Something went wrong. Please try again."}
    </h2>
  </div>
);

export default Error;
