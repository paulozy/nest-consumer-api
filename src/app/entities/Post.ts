import { randomUUID } from 'node:crypto';
import { Replace } from 'src/utils/Replace';

export interface IPostProps {
  author: string;
  title: string;
  content: string;
  createdAt: Date;
}

export class Post {
  private _id: string;
  private props: IPostProps;

  constructor(props: Replace<IPostProps, { createdAt?: Date }>, id?: string) {
    this._id = id ?? randomUUID();
    this.props = { ...props, createdAt: props.createdAt ?? new Date() };
  }

  public get id(): string {
    return this._id;
  }

  public get author(): string {
    return this.props.author;
  }

  public set author(value: string) {
    this.props.author = value;
  }

  public get title(): string {
    return this.props.title;
  }

  public set title(value: string) {
    this.props.title = value;
  }

  public get content(): string {
    return this.props.content;
  }

  public set content(value: string) {
    this.props.content = value;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
