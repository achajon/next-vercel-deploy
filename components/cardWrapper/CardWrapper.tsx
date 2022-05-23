import { FC, PropsWithChildren } from "react";

type Props = {
  /** Extra class for the container Div*/
  paddingClass?: string
}

/** Component that wrap the children element inside a bootstrap card with shadow */
const CardWrapper: FC<PropsWithChildren<Props>> = ({ children, paddingClass }) => {
  return (
    <div className={["card shadow-sm mt-3", paddingClass].join(" ")}>
      {children}
    </div>
  );
};

// Specifies the default values for props:
CardWrapper.defaultProps = {
  paddingClass: "p-1 p-md-3",
};

export default CardWrapper;
