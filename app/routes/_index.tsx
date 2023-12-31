import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from '@remix-run/react';

import { useOptionalUser } from "~/utils";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <div className="text-center mx-auto">
      <Link
        to="/images"
        className="text-xl text-blue-600 underline"
      >
        Images
      </Link>
    </div>
  );
}
