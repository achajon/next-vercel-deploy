import { FC, PropsWithChildren } from "react";

type Props = {}

export const DarkLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        borderRadius: 5,
        padding: 10,
      }}
    >
      {children}
    </div>
  );
};

export default DarkLayout;
