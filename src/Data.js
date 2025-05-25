import componentImage from './assets/components.png';
import configImage from './assets/config.png';
import jsxui from './assets/jsx-ui.png';
import stateImge from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
    {
        id: 1,
        imagem: componentImage,
        titulo: "Componentes em react",
        descricao: "Pequenos blocos de UI que compõe a estrutura da aplicacao."
    },
    {
        id: 2,
        imagem: configImage,
        titulo: "Adicionar imagem",
        descricao: "Funciona como se estivesse importando um dado JS."
    },
    {
        id: 3,
        imagem: jsxui,
        titulo: "Passando dados via Props",
        descricao: "Torna os componentes configuravéis para a reutilização de código"
    },
    {
        id: 4,
        imagem: stateImge,
        titulo: "Utilizando useState",
        descricao: "Observa a mudança do estado de um dado para a redenrizar na tela."
    },
]
  
export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};