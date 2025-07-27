export interface IProduct {
  id: string;
  localizeInfos: { title: Record<string, never> };
  price: number | null;
  attributeValues: {
    p_description: { value: { htmlValue: string }[] };
    p_price: { value: number };
    p_image: { value: { downloadLink: string } };
    p_title: { value: string };
  };
}