import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import { NotFoundProps } from "./NotFound.interfaces";

export const NotFound: React.FC<NotFoundProps> = () => {
  return (
    <section className="bg-gray-900 flex-grow flex items-center justify-center">
      <div className="text-center  space-y-8 p-6 pb-10 container max-w-2xl">
        <img className="h-80" src="/assets/imgs/notfound.svg" alt="NotFound" />
        <div className="text-4xl font-bold text-white">Not Found!</div>
        <div className="text-sm text-white">Page Not Found!</div>
        <Link to="/" className="inline-block">
          <Button variant="contained">Back Home</Button>
        </Link>
      </div>
    </section>
  );
};
