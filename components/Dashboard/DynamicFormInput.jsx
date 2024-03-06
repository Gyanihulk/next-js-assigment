const DynamicFormInput = ({ placeholder, name, type, value, onChange }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-b border-stroke !bg-white pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:!bg-black dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
      />
    );
  };
  export default DynamicFormInput;