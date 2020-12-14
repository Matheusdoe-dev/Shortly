import colors from "../settings/colors";

const hovers = {
  button: `
        transition: .3s;
        filter: brightness(95%);
    `,

  primary: `
        transition: .3s;
        color: ${colors.primary.dark_violet};
    `,

  secondary: `
        transition: .3s;
        color: ${colors.primary.cyan};
    `,
};

export default hovers;
