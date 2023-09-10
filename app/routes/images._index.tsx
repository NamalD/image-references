import { ActionArgs, json } from "@remix-run/node";
import { Form, Link, useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";

export const loader = async () => {
  const images = await prisma.image.count();
  return json({ images });
}

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

export default function ImagesIndex() {
  const { images } = useLoaderData<typeof loader>();

  return (
    <div className="flex gap-1 mb-3">
      <Link
        to="upload"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-orange-700 mt-3"
      >
        Upload
      </Link>

      {
        images > 0 && (
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
  )
}