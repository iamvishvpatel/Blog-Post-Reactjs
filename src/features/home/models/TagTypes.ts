
export type Props = {
  tags: { id: number; name: string}[];
  selectedTagId: number | null;
  onSelectTag: (tagId: number | null) => void;
};