import { jsx } from "react/jsx-runtime";
const button = "_button_14ndq_1";
const styles = {
  button,
  "button--primary": "_button--primary_14ndq_8",
  "button--secondary": "_button--secondary_14ndq_15"
};
const Button = ({ children, variant, ...props }) => {
  return /* @__PURE__ */ jsx("button", { className: `${styles.button} ${styles[`button--${variant}`]}`, ...props, children });
};
export {
  Button
};
