import { ReactNode } from "react";

interface IAccessGuard {
    id?: number;
    children: ReactNode;
    allowedIds?: number[];
}

const AccessGuard = ({ id, children, allowedIds }: IAccessGuard) => {

    return children;
    
};

export default AccessGuard;
