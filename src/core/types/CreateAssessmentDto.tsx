export type CreateUserDto = {
  name: string;
  nickname: string;
  email: string;
  gender: string;
  birthdate: string;
};

export type CreateHealthMarkerDto = {
  healthMarkerId: number;
  value: string;
};

export type CreateCommentDto = {
  groupId: number;
  comment: string;
  color: string;
};

export type CreateAssessmentDto = {
  reportType: string | any,
  sourceName?: string;
  sourceType: 'WEB_APP';
  sourceDate: Date;
  healthMarkers: CreateHealthMarkerDto[];
  comments: CreateCommentDto[];
  userAction: 'create' | 'existing';
  cognitoId?: any;
  user?: CreateUserDto;
};
