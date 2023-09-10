import { ActionArgs, json, LoaderArgs } from "@remix-run/node";
import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";
import { getImages } from "~/routes/images.server";

export const loader = async ({ params }: LoaderArgs) => {
  return json({ id: params.id, images: await getImages() });
};

export const action = async ({ request }: ActionArgs) => {
  if (request.method !== "DELETE") {
    return json({ message: "Method not allowed" }, { status: 405 });
  }

  const images = await prisma.image.findMany({});
  for (const image of images) {
    console.log(`Deleting image ${image.id}`);
    await prisma.image.delete({
      where: {
        id: image.id
      }
    });
  }

  return null;
}

export default function Images() {
  const { images } = useLoaderData<typeof loader>();

  // TODO: Single image page
  // TODO: Edit image metadata
  // TODO: Refactor each image to page
  // TODO: Lightbox
  // TODO: Add tags
  // TODO: Delete tags

  return (
    <main className="m-3">
      <h1 className="text-xl mb-3">Images</h1>

      <div className="flex gap-1 mb-3">
        <Link
          to="upload"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-orange-700 mt-3"
        >
          Upload
        </Link>

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
      </div>

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