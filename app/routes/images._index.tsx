// TODO: Load images from the DB
// TODO: Display images in a grid

import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getImages } from '~/routes/images.server';

export const loader = async () => {
  return json({ images: await getImages() });
};

export default function Images() {
  const { images } = useLoaderData<typeof loader>();

  // TODO: Display tags
  // TODO: Display image previews
  // TODO: Lightbox
  return (
    <main>
      <h1>Images</h1>
      {
        images.map(image => (
          <div key={image.id}>
            <h2>{image.name}</h2>
            <h3>{image.uploaded.toString()}</h3>
            <img src={image.path} alt={image.name} />
          </div>
        ))
      }
    </main>
  );
}