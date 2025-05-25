export default function Header({imagem}){
    return(
        <header>
            <img src={imagem} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                Fundamental React concepts you will need for almost any app you are
                going to build!
            </p>
            </header>
    )
}