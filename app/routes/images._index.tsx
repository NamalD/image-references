import { json, LoaderArgs } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { getImages } from "~/routes/images.server";

export const loader = async ({ params }: LoaderArgs) => {
  return json({ id: params.id, images: await getImages() });
};

export default function ImagesIndex() {
  const { images } = useLoaderData<typeof loader>();

  return (
    <div>
      {
        images.length > 0 && (
          <Form method="delete">
            <button
              type="submit"
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-orange-700 mt-3"
            >
              Delete All
            </button>
          </Form>
        )
      }

      <div className="flex flex-wrap w-11/12 justify-center gap-3">

        {
          images.map(image => (
            <Link
              to={image.id.toString()}
              key={image.id}
            >
              <img
                src={image.path}
                alt={image.name}
                className="h-60 w-60 object-cover"
              />
            </Link>
          ))
        }
      </div>
    </div>
  );
}