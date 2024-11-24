import { HeaderProps } from "@/types";
import { FC } from "react";

const Header6: FC<HeaderProps> = ({title}) => {
    return (
        <h4 className="block mb-4 font-sans text-base antialiased 
                       font-semibold leading-relaxed tracking-normal 
                     text-gray-700 uppercase"
        >
            {title}
        </h4>
    );
}

export {Header6}
