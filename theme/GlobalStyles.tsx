import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
${(props) => props.theme.styles.reset};

${(props) => props.theme.styles.typography};

${(props) => props.theme.styles.utilities};


${(props) => props.theme.componentStyles.header};

${(props) => props.theme.styles.light};

`;
