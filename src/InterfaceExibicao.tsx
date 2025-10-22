import { type ReactNode } from "react";

type InterfaceExibicaoProps = {
    children?: ReactNode;
}

export default function InterfaceExibicao({ children }: InterfaceExibicaoProps){
    return(
        <div className="exibicao">
            <div className="personagem">{children}</div>
        </div>
    );
}