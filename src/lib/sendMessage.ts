import { Message } from 'src/@types/Message';

export function sendMessage<T extends Message>(message: T) {
  chrome.runtime.sendMessage<T>(message);
}
