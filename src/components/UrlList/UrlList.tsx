import React from 'react';
import { Layout } from 'src/components/Layout';

export type Item = {
  id: string;
  url: string;
};

type Props = {
  items: Item[];
  onDelete: (id: string) => void;
};

export function UrlList({ items, onDelete }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Layout>
            <div>{item.url}</div>
            <button onClick={() => onDelete(item.id)} type="button">
              Delete
            </button>
          </Layout>
        </li>
      ))}
    </ul>
  );
}
