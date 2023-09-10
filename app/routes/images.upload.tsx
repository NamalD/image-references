import { ActionArgs, json, NodeOnDiskFile, redirect, unstable_parseMultipartFormData } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import React from "react";
import invariant from "tiny-invariant";
import { FormElement } from "~/components/FormElement";
import { Input } from "~/components/Input";
import { localFileUploadHandler, uploadImage } from "~/routes/images.server";

export const action = async ({ request }: ActionArgs) => {
  // TODO: Upload image to cloudinary
  const formData = await unstable_parseMultipartFormData(
    request,
    localFileUploadHandler
  );

  const image = formData.get("image");
  invariant(image instanceof NodeOnDiskFile, "Image must be a file");

  const errors = {
    image: !image ? "Image is required" : null,
  };

  if (Object.values(errors).some(Boolean)) {
    return json(errors);
  }

  await uploadImage(image);

  // TODO: Redirect to the uploaded image
  // TODO: Edit name, description, and tags from the image page
  return redirect("/images");
};

export default function ImagesUpload() {
  // TODO: Support existing tags
  // TODO: Support new tags
  // TODO: File upload
  // TODO: Modal view
  // TODO: Form validation

  const errors = useActionData<typeof action>();

  return (
    <Form method="post" encType="multipart/form-data">
      <FormElement
        label="Image"
        error={errors?.image}
      >
        <Input
          name="image"
          type="file"
          accept="image/*"
        />
      </FormElement>

      <button
        type="submit"
        className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 mt-3"
      >
        Upload
      </button>
    </Form>
  );
}