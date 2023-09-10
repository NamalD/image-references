import { NodeOnDiskFile, unstable_createFileUploadHandler } from "@remix-run/node";
import { prisma } from "~/db.server";

export const getImages = async () => {
  return prisma.image.findMany({
    include: {
      tags: true,
    }
  });
};

export function getImageCount() {
  return prisma.image.count();
}

export function getImageById(id: number) {
  return prisma.image.findUnique({
    where: {
      id,
    },
    include: {
      tags: true,
    }
  });
}

export const localFileUploadHandler =
  unstable_createFileUploadHandler({
    directory: 'public/img',
  });


export async function uploadImage(file: NodeOnDiskFile) {
  return prisma.image.create({
    data: {
      name: file.name,
      path: `/img/${file.name}`,
    }
  });
}
