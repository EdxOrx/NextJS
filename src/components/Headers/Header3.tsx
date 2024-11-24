import { HeaderProps } from "@/types";
import { FC } from "react";

const Header3: FC<HeaderProps> = ({title}) => {
    return (
        <h4 className="text-xl font-semibold text-gray-900 dark:text-white"
        >
            {title}
        </h4>
    );
}

export {Header3}
