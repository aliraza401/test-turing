import { FC } from "react";
import { CirclePopLoader } from "react-loaders-kit";
import { themeColor } from "../../styles/MuiTheme";

import { LoaderProps } from "./Loader.interfaces";

export const Loader: FC<LoaderProps> = (props) => {
  const { className, loading = true, ...rest } = props;

  return (
    <div
      className={`${className} m-auto h-full flex items-center justify-center flex-col`}
    >
      <CirclePopLoader
        // colors={[themeColor.primary.main, themeColor.primary.main]}
        loading={loading}
        {...rest}
      />
    </div>
  );
};
