import { forwardRef } from "react";
import type { IInputFieldProps } from "../types/input-field";

const InputField = forwardRef(
  ({ id, type, label }: IInputFieldProps, ref: React.Ref<HTMLInputElement>) => {
    return (
      <div className="relative">
        <input
          ref={ref}
          id={id}
          type={type}
          className="peer bg-gray-400/10 block text-white w-full border border-zinc-500 px-4 pb-1 pt-6 focus:outline-2 outline-white rounded-sm outline-offset-1"
        />
        <label
          htmlFor={id}
          className="absolute text-gray-400 left-4 top-4 origin-[0] -translate-y-3 scale-75 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75"
        >
          {label}
        </label>
      </div>
    );
  }
);

export default InputField;
