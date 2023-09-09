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

  return (
    <main>
      <h1>Images</h1>
      {
        images.map(image => (
          <div key={image.id}>
            <h2>{image.name}</h2>
            <h3>{image.uploaded.toString()}</h3>
            <ul>
              {
                image.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </main>
  );
}