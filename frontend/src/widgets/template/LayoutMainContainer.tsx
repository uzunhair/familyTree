import { ReactNode } from "react";

type TProps = {
  children: ReactNode;
  title?: string;
};

export const LayoutMainContainer = ({ children, title }: TProps) => {
  return (
    <>
      {title && (
        <div className="intro-y mt-8 flex items-center">
          <h2 className="mr-auto text-lg font-medium">{title}</h2>
        </div>
      )}
      <div className="mt-5 grid grid-cols-12 gap-6">{children}</div>
    </>
  );
};
