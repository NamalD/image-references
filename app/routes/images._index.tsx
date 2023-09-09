import { Link } from "@remix-run/react";

export default function ImagesIndex() {
  return (
    <div>
      <Link to="upload" className="text-blue-600">
        Upload
      </Link>
    </div>
  )
}