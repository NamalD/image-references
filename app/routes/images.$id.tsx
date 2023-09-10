import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getImageById } from "~/routes/images.server";

export const loader = async ({ params }: LoaderArgs) => {
  const id = parseInt(params.id ?? "");
  invariant(!isNaN(id), "Image ID must be a number");

  const image = await getImageById(id);
  invariant(image, "Image not found");

  return json({ image });
}

export default function ImageById() {
  const { image } = useLoaderData<typeof loader>();

  return (
    <img
      src={image.path}
      alt={image.name}
      className="h-60 w-60 object-cover"
    />
  )
}