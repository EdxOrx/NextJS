import { HeaderProps } from "@/types";
import { FC } from "react";

const Header4: FC<HeaderProps> = ({title}) => {
    return (
        <h4 className="block mb-2 font-sans text-2xl antialiased 
                       font-semibold leading-snug tracking-normal 
                       text-blue-gray-900"
        >
            {title}
        </h4>
    );
}

export {Header4}
