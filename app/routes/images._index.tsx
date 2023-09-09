import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getImages } from "~/routes/images.server";

export const loader = async () => {
  return json({ images: await getImages() });
};

export default function Images() {
  const { images } = useLoaderData<typeof loader>();

  // TODO: Display image previews
  // TODO: Lightbox
  // TODO: Upload
  // TODO: Add tags
  // TODO: Delete tags
  // TODO: Delete images
  // TODO: Edit image metadata
  // TODO: Refactor each image to page

  return (
    <main className="m-3">
      <h1 className="text-xl mb-3">Images</h1>
      <div className="grid grid-cols-3 gap-3">
      {
        images.map(image => (
          <div key={image.id}>
            <h2 className="text-lg text-gray-900">
              {image.name}
            </h2>
            <img
              src={image.path}
              alt={image.name}
              className="h-1/3"
            />
            {
              <ul className="text-gray-600 flex flex-wrap items-center">
                {
                  image.tags.map(tag => (
                    <li key={tag.id}>
                      <span className="italic mr-4">{tag.name}</span>
                    </li>
                  ))
                }
              </ul>
            }
          </div>
        ))
      }
      </div>
    </main>
  );
}