import { Link } from "@remix-run/react";

export default function ImagesIndex() {
  return (
    <div className="mb-3">
      <Link
        to="upload"
        className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 mt-3"
      >
        Upload
      </Link>
    </div>
  )
}