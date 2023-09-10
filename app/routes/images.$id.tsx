import { json, LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Input } from "~/components/Input";
import { getImageById } from "~/routes/images.server";

export const loader = async ({ params }: LoaderArgs) => {
  const id = parseInt(params.id ?? "");
  invariant(!isNaN(id), "Image ID must be a number");

  const image = await getImageById(id);
  invariant(image, "Image not found");

  return json({ image });
};

export default function ImageById() {
  const { image } = useLoaderData<typeof loader>();

  return (
    <div className="mt-1 flex flex-col justify-start">
      <img
        src={image.path}
        alt={image.name}
        className="w-96"
      />

      <Form
        method="post"
        className="flex mt-3 gap-1"
      >
        <Input
          name="tag"
          className="w-48 border rounded"
        />

        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-orange-700 w-20"
        >
          + Tag
        </button>
      </Form>

      {
        image.tags.map(tag => (
          <div
            key={tag.id}
            className="bg-gray-200 rounded-full px-2 py-1 text-sm text-gray-700 mr-1"
          >
            {tag.name}
          </div>
        ))
      }
    </div>
  );
}