import { prisma } from "~/db.server";

export const getImages = async () => {
  return prisma.image.findMany({
    include: {
      tags: true,
    }
  });
};
