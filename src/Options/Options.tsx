import React, { useState } from 'react';

import { Layout } from 'src/components/Layout';
import { UrlList } from 'src/components/UrlList';
import type { Item } from 'src/components/UrlList';

const urlItems: Item[] = [
  {
    id: '1',
    url: 'https:example.com',
  },
  {
    id: '2',
    url: 'https:example2.com',
  },
  {
    id: '3',
    url: 'https:example3.com',
  },
];

export function Options() {
  const [urls, setUrls] = useState(urlItems);

  function handleDelete(id: string) {
    setUrls((prevState) => prevState.filter((item) => item.id !== id));
  }

  return (
    <Layout isColumn>
      <h1>Options</h1>
      <UrlList items={urls} onDelete={handleDelete} />
    </Layout>
  );
}
