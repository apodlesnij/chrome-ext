import { Background } from 'src/background/Background';
import { Queue } from 'src/constants/Queue';
import { BackgroundMessage } from 'src/@types/BackgroundMessage';

const background = new Background();

async function handleOnMessage(message: BackgroundMessage) {
  if (message.queue !== Queue.BACKGROUND) {
    return;
  }

  const { name, data } = message;

  try {
    await background[name](data);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

chrome.runtime.onMessage.addListener(handleOnMessage);
