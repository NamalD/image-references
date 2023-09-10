import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
  return json({ id: params.id });
}

export default function ImageById() {
  const { id } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Image {id}</h1>
    </div>
  )
}