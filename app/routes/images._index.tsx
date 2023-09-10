import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getImages } from "~/routes/images.server";

export const loader = async ({ params }: LoaderArgs) => {
  return json({ id: params.id, images: await getImages() });
};

export default function ImagesIndex() {
  const { images } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-wrap w-11/12 justify-center gap-3">
      {
        images.map(image => (
          <img
            key={image.id}
            src={image.path}
            alt={image.name}
            className="h-60 w-60 object-cover"
          />
        ))
      }
    </div>
  );
}