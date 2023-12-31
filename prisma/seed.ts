import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const images = [
  {
    id: 1,
    name: 'Banks of Acheron',
    path: '/img/banks_of_acheron.png',
    tags: [
      { name: 'Painting' },
      { name: 'Greek Myth' },
      { name: 'God' },
    ]
  },
  {
    id: 2,
    name: 'Animals in Moonlit Forest',
    path: '/img/animals_in_moonlit_forest.png',
    tags: [
      { name: 'Animals' },
      { name: 'Forest' },
    ]
  }
];

async function seed() {
  const tags = images
    .flatMap((image) => image.tags)
    .filter((tag, index, self) => self.findIndex((t) => t.name === tag.name) === index);

  for (const tag of tags) {
    console.log('Migrating tag:', tag);
    await prisma.tag.upsert({
      where: { name: tag.name },
      update: {},
      create: tag
    });
  }

  for (const image of images) {
    console.log('Migrating image:', image);
    await prisma.image.upsert({
      where: { id: image.id },
      update: {
        ...image,
        tags: {
          set: image.tags
        }
      },
      create: {
        ...image,
        tags: {
          connect: image.tags
        }
      }
    });
  }

  console.log(`Database has been seeded. 🌱`);
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
