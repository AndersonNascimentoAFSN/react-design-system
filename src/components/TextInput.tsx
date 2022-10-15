import { InputHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div
      className={clsx(
        "flex items-center gap-3 py-4 px-3 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300",
        {}
      )}
    >
      {children}
    </div>
  );
}

TextInputRoot.displayName = 'TextInputs.Root';

function TextInputIcon({ children }: TextInputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}

TextInputIcon.displayName = 'TextInputs.Icon';

function TextInput(props: TextInputProps) {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}

TextInput.displayName = 'TextInputs.Input';

export const TextInputs = {
  Root: TextInputRoot,
  Input: TextInput,
  Icon: TextInputIcon,
};
