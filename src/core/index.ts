export { default as AuthGuard } from './guards/AuthGuard';
export { ApiUrl } from './constants/ApiUrl';
export { AppColor, GraphColorRangeMap, hexToRgb } from './constants/Colors';
export { default as Config } from './constants/Config';
export { ButtonStyles } from './constants/ElementBaseStyles';

export {
  ButtonColor,
  ButtonRadius,
  LinkColor,
  FontColor,
  FontFamily,
  FontStyle,
  InputFieldHeight,
  BaseColor,
  DefaulPrimarytColor,
} from './constants/ElementBaseStyles';
export { ImageIcons } from './constants/ImageIcons';
export {
  emailValidator,
  UsernameOrEmailValidator,
  containsUppercaseCharacter,
  containsLowercaseCharacter,
  containsDigitCharacter,
  containsSpecialCaseCharacter,
  lengthValidator,
  passwordValidator,
  stringValidator,
  genderTypeValidator,
  dateValidator,
  authCodeValidator,
  nameValidator,
  fieldValidator,
  isNumeric,
  rangeValidator,
  emptyAndRangeValidator,
  confirmpasswordValidator
} from './constants/InputValidator';
export { EmailPattern, AseesmentFieldPattern } from './constants/Patterns';
export { default as UserService } from './services/user/user.service';
export { default as WorkoutService } from './services/workout/workout.service';
export type {
  FocusDropDown,
  ExcersiceDropdown,
  SetType,
  ActivityLoggerType,
} from './types/ActivityLogger.type';
export type {
  IBloodworkFileUpload,
  HealthMarkerUnit,
  BiomarkerItem,
  Bloodwork,
  HealthMarker,
} from './types/Bloodwork.type';
export type {
  CreateUserDto,
  CreateHealthMarkerDto,
  CreateCommentDto,
  CreateAssessmentDto,
} from './types/CreateAssessmentDto';
export { GraphType } from './types/GraphType';
export type { HealthMarkerFileUpload } from './types/HealthMarkerFileUpload.type';
export type { IUser, IClient, IReport } from './types/user.type';
export type { UserAttributes } from './types/UserAttributes';
export type {
  WorkoutItem,
  Exercise,
  ExerciseItem,
  Workout,
  RestItem,
  TempoItem,
} from './types/Workout';

export type AuthError = {
  error: {
    code: number;
    message: string;
  };
};

export type ValidateError = {
  name: string;
  message: string;
};
