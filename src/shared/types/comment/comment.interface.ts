import { UserResponse, VideoResponse, Like } from '@types';

export interface Comment {
	id: number;
	title: string;
	createdAt: string;
	editedAt: string;
	isEdited: boolean;
	body: string;
	commentedVideo: VideoResponse;
	author: UserResponse;
	likes: Like[];
	likesCount: number;
	isLiked: boolean;
	isDisliked: boolean;
}
