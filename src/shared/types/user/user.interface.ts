import { CommentResponse, VideoResponse } from '@types';

export interface User {
	email: string;
	password: string;
	token: string;
	username: string;
	comments: CommentResponse[];
	videos: VideoResponse[];
	watchedVideos: VideoResponse[];
	activationCode: string;
	bannerBackground: string;
	avatarBackground: string;
}
