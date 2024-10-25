import { Message } from 'src/@types/Message';
import { ParseNameData } from 'src/@types/ParseNameData';
import { IBackground } from 'src/background/Background';

export type BackgroundMessage = Message & ParseNameData<IBackground>;
