
import { DelegateInfo, GalleryItem } from './types';

export const DELEGATE_DATA: DelegateInfo = {
  name: "Temesgn Woldu Gebremedhin",
  nameAmharic: "ተመስገን ወልዱ ገብረመድህን",
  position: "International Delegate",
  positionAmharic: "የስራ ድርሻ የውጭ ጉዳዮች ተወካይ",
  idNumber: "EYC-7501-25",
  issueDate: "05/06/25",
  expiryDate: "04/06/27",
  address: "N.S.L.K.K Addis Ababa",
  addressAmharic: "ን.ስ.ላ.ክ.ከ አ.አ",
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    url: 'input_file_1.png',
    title: 'Official Diplomatic Portrait',
    description: 'Temesgn Woldu Gebremedhin, representing the Ethiopian Youth Council with the national flag.',
    category: 'Official'
  },
  {
    id: '2',
    url: 'input_file_2.png',
    title: 'Bilateral Engagement',
    description: 'High-level audience with diplomatic officials, framed by portraits of national leadership including PM Abiy Ahmed.',
    category: 'Meetings'
  },
  {
    id: '3',
    url: 'input_file_3.png',
    title: 'International Summit Representation',
    description: 'Seated at the Ethiopian delegation table during a major international forum, engaging with fellow delegates.',
    category: 'Diplomacy'
  },
  {
    id: '4',
    url: 'input_file_4.png',
    title: 'Global Cooperation',
    description: 'Strategic meeting with international counterparts representing a diverse coalition of nations (Eswatini, Brazil, Fiji, Finland).',
    category: 'Diplomacy'
  }
];
