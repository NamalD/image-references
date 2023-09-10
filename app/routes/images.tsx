import { ActionArgs, json } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import { prisma } from "~/db.server";

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
  // TODO: Edit image metadata
  // TODO: Refactor each image to page
  // TODO: Lightbox
  // TODO: Add tags
  // TODO: Delete tags

  return (
    <main className="m-3">
      <h1 className="text-xl mb-3">Images</h1>

      <div className="flex gap-1">
        <Link
          to="upload"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-orange-700 mt-3"
        >
          Upload
        </Link>

      </div>

      <Outlet />
    </main>
  );
}