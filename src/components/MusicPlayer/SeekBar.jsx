const SeekBar = ({ value, min, max, onInput }) => {
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center select-none text-bgGray text-sm">
      <p>{value === 0 ? "0:00" : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block w-24 md:w-60 2xl:w-96 h-1 mx-4 2xl:mx-6"
      />
      <p>{max === 0 ? "0:00" : getTime(max)}</p>
    </div>
  );
};

export default SeekBar;
