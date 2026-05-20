export type SchemaField = {
  name: string;
  title: string;
  type: string;
  description?: string;
  required?: boolean;
  to?: string[];
  of?: string[];
};

export type SchemaType = {
  name: string;
  title: string;
  type: 'document' | 'object';
  fields: SchemaField[];
};
