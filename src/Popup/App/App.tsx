import React from 'react';

import { sendMessage } from 'src/lib/sendMessage';
import { Queue } from 'src/constants/Queue';

import type { BackgroundMessage } from 'src/@types/BackgroundMessage';

import style from 'src/Popup/App/App.module.css';

export function App() {
  const handlerSaveBluer = () => {
    sendMessage<BackgroundMessage>({
      queue: Queue.BACKGROUND,
      name: 'saveBluer',
      data: {
        target: 'testing',
      },
    });
  };

  return (
    <div className={style.card}>
      <header className={style.header}>Hello world</header>
      <button type="button" onClick={handlerSaveBluer}>
        SaveBluer
      </button>
    </div>
  );
}
