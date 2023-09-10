import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { getImages } from "~/routes/images.server";

export const loader = async () => {
  return json({ images: await getImages() });
};

export default function Images() {
  const { images } = useLoaderData<typeof loader>();

  // TODO: Add tags
  // TODO: Delete tags
  // TODO: Delete images
  // TODO: Edit image metadata
  // TODO: Refactor each image to page
  // TODO: Lightbox

  return (
    <main className="m-3">
      <h1 className="text-xl mb-3">Images</h1>
      <Outlet />
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
    </main>
  );
}