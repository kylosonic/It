
export interface DelegateInfo {
  name: string;
  nameAmharic: string;
  position: string;
  positionAmharic: string;
  idNumber: string;
  issueDate: string;
  expiryDate: string;
  address: string;
  addressAmharic: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  description: string;
  category: 'Diplomacy' | 'Meetings' | 'Official';
}
