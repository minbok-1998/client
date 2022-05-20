export interface PostType {
  postId: string;
  author: string;
  title: string;
  content: string;
  imgUrl: string[];
  like: number;
  comment: { author: string; content: string }[];
}
