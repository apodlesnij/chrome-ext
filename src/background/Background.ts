type EventSaveBluerData = {
  target: string;
};

export interface IBackground {
  saveBluer: (data: EventSaveBluerData) => Promise<void>;
}
export class Background implements IBackground {
  async saveBluer(data: EventSaveBluerData) {
    console.log('HAS MESSAGE');
    console.log(data);
  }
}
