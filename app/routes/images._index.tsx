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

  return (
    <main>
      <h1>Images</h1>
      {
        images.map(image => (
          <div key={image.id}>
            <h2>{image.name}</h2>
            <img src={image.path} alt={image.name} />
            {
              <ul>
                {
                  image.tags.map(tag => (
                    <li key={tag.id}>{tag.name}</li>
                  ))
                }
              </ul>
            }
          </div>
        ))
      }
    </main>
  );
}