import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreatePostDTO {
  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @Length(5, 70)
  title: string;

  @IsNotEmpty()
  @Length(5, 250)
  content: string;
}
