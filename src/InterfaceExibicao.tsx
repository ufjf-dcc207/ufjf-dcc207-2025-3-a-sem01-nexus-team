import { type ReactNode } from "react";
import "./InterfaceExibicao.css"
type InterfaceExibicaoProps = {
    children?: ReactNode;
}

export default function InterfaceExibicao({ children }: InterfaceExibicaoProps){
    return(
        <div className="exibicao">
            {children}
        </div>
    );
}