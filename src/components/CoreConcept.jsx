export default function CoreConcept({imagem,titulo,descricao}){
    return(
        <li>
            <img src={imagem} alt="Imagem do card" />
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </li>
    )
}