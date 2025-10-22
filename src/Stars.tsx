export default function Stars({ classificacao }: { classificacao: number }) {
    if(classificacao > 5) classificacao = 5;
    if(classificacao < 1) classificacao = 1;
    return (
        <div className="stars">
            {Array.from({ length: classificacao }, (_, index) => (
                <span key={index} className={index < classificacao ? 'preenchida' : 'vazia'}>
                    ⭐
                </span>
            ))}
            {Array.from({ length: 5 - classificacao }, (_, index) => (
                <span key={index + classificacao} className='vazia'>
                    ☆
                </span>
            ))}
        </div>
    );
}