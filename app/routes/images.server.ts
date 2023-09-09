import { json } from '@remix-run/node';

interface Image {
  id: number;
  name: string;
  blob: string; // TODO: Properly type this
  uploaded: Date;
  tags: string[];
}

export const getImages = async (): Promise<Image[]> => {
  return [
    {
      id: 1,
      name: 'Image 1',
      blob: '',
      uploaded: new Date(),
      tags: ['tag1', 'tag2']
    },
    {
      id: 2,
      name: 'Image 2',
      blob: '',
      uploaded: new Date(),
      tags: ['tag2', 'tag3']
    },
  ];
};
