import { CirclePopProps } from "react-loaders-kit/lib/circlePop/CirclePopLoader";
import { Optional } from "../../types/types";

export interface LoaderProps extends Optional<CirclePopProps, "loading"> {
  className?: string;
}
