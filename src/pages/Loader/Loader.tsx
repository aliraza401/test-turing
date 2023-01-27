import { Loader as LoaderComponent } from "./../../components/Loader";
import { LoaderProps } from "./Loader.interface";

export const Loader: React.FC<LoaderProps> = ({ className }) => {
  return (
    <div
      className={`${className} h-screen h-100 bg-gray-900 flex items-center justuify-center`}
    >
      <LoaderComponent size={150} />
    </div>
  );
};
