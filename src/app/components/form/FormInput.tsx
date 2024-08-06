import { IFormInput } from "@/app/interfaces/IFormInput";

export default function FormInput(props: IFormInput) {
  const {
    label = "",
    type = "text",
    name = "",
    id = "",
    placeholder = "",
    required = false,
  } = props;
  return (
    <>
      <div className="mb-[15px]  ">
        {label && (
          <label
            htmlFor={id}
            className="block mb-[5px] font-[600] text-[14px]  "
          >
            <span className="text-white ">{label}</span>
            {required && (<span className="text-[#F21D2F] ml-[5px] ">*</span>)}
          </label>
        )}

        <input
          type={type}
          name={name}
          id={id}
          required={required}
          placeholder={placeholder}
          className="w-full h-[50px] bg-white rounded-[6px] px-[16px] font-[600] text-[14px] outline-none "
        ></input>
      </div>
    </>
  );
}
