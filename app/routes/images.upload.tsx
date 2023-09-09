import { Form } from "@remix-run/react";
import React from "react";
import { FormElement } from "~/components/FormElement";
import { Input } from "~/components/Input";


export default function ImagesUpload() {
  // TODO: Support existing tags
  // TODO: Support new tags
  // TODO: File upload

  return (
    <Form method="post">
      <FormElement label="Name">
        <Input name="name" />
      </FormElement>

      <FormElement label="Description">
        <Input name="description" />
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