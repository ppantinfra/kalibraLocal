//import { LargeNumberLike } from "crypto";
import moment from 'moment';
// import React from 'react';

export const emailValidator = (email: string): string => {
  const validEmail = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) {
    return 'Email cannot be empty.';
  }
  if (!validEmail.test(email)) {
    return 'Not a valid email address.';
  }
  return '';
};

export const UsernameOrEmailValidator = (email: string): string => {
  const validEmail = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) {
    return 'Username cannot be empty.';
  }
  if (!validEmail.test(email)) {
    return 'Not a valid Username.';
  }
  return '';
};

export const containsUppercaseCharacter = (text: string): boolean => {
  return /[A-Z]/.test(text);
};

export const containsLowercaseCharacter = (text: string): boolean => {
  return /[a-z]/.test(text);
};

export const containsDigitCharacter = (text: string): boolean => {
  return /[0-9]/.test(text);
};

// https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-policies.html
// ^ $ * . [ ] { } ( ) ? - " ! @ # % & / \ , > < ' : ; | _ ~ `
export const containsSpecialCaseCharacter = (text: string): boolean => {
  return /[\^$*.[\]{}\-()?"!@#%&/\\,><':;|_~`]/.test(text);
};

export const lengthValidator = (text: string, minLength: number, maxLength: number): boolean => {
  return text !== undefined && text.length >= minLength && text.length <= maxLength;
};

export const confirmpasswordValidator = (password: string, confirmpassword: string): string | any => {
  if (password !== confirmpassword) {
    return 'Confirm Password and Password must be the same.';
  }
  return '';
};

export const passwordValidator = (password: string): string | any => {
  if (!password || password.length <= 0) {
    return 'Password cannot be empty.';
  }
  // if (password.length < 8) {
  //   return 'Password must be a minimum of 8 characters long.';
  // }
  if (password.length > 99) {
    return 'Password cannot be longer than 99 characters.';
  }

  // Check Minimum password requirements:
  // - 1 lowercase character
  // - 1 uppercase character
  // - 1 digit (0-9)
  // - 1 special character: ^ $ * . [ ] { } ( ) ? - " ! @ # % & / \ , > < ' : ; | _ ~ `

  if (
    !(
      containsUppercaseCharacter(password) &&
      containsLowercaseCharacter(password) &&
      containsDigitCharacter(password) &&
      containsSpecialCaseCharacter(password)
    ) || password.length < 8
  ) {
    return 'Password must be a minimum of 8 characters long. Password requires at least 1 lowercase character, 1 uppercase character, 1 digit and 1 special character.';
    // return (
    //   <>
    //     <span className={!(containsLowercaseCharacter(password)) ? 'invalid' : 'valid'}>
    //       Password requires at least 1 lowercase character,
    //     </span>{' '}
    //     <span className={!(containsUppercaseCharacter(password)) ? 'invalid' : 'valid'}>1 uppercase character,</span>
    //     <span className={!(containsDigitCharacter(password)) ? 'invalid' : 'valid'}>1 digit and</span> {' '}
    //     <span className={!(containsSpecialCaseCharacter(password)) ? 'invalid' : 'valid'}> 1 special character.</span>
    //   </>
    // );
  }

  return '';
};

export const stringValidator = (name: string, value: string): string => {
  if (!value || value.length <= 0) {
    return name + ' cannot be empty.';
  }

  return '';
};

export const genderTypeValidator = (gender: string): string => {
  if (!gender || gender.length <= 0 || (gender !== 'male' && gender !== 'female' && gender !== 'other')) {
    return "Please select a sex from: 'male' , 'female' or 'other'.";
  }

  return '';
};

export const dateValidator = (format: string, value: string | undefined): string => {
  if (!value || value.length <= 0) {
    return 'Birth Date cannot be empty.';
  }

  if (!moment(value, format, true).isValid()) {
    return 'Not a valid Birth Date.';
  }

  const years = moment().diff(value, 'years', true);
  if (years < 18) {
    return 'Sorry about that. You must be 18 years or older.';
  }

  return '';
};

export const authCodeValidator = (value: string): string => {
  if (!value || value.length <= 0) {
    return 'Code cannot be empty.';
  }

  return '';
};

export const nameValidator = (name: string): string => {
  if (!name || name.length <= 0) {
    return 'Name cannot be empty.';
  }

  return '';
};

export const fieldValidator = (name: string): string => {
  if (!name || name.length <= 0) {
    return 'This field cannot be empty.';
  }

  return '';
};

export const isNumeric = (value: string): boolean => {
  return value.trim().length > 0 && !isNaN(Number(value));
};

export const rangeValidator = (value: number, minRange: number, maxRange: number): boolean => {
  return value >= minRange && value <= maxRange;
};

export const emptyAndRangeValidator = (value: string, minRange: number, maxRange: number): boolean => {
  let validation: boolean = !value || value.length === 0;
  let convertNumber: number;

  if (!validation && isNumeric(value)) {
    convertNumber = Number(value);
    validation = convertNumber >= minRange && convertNumber <= maxRange;
  }
  return validation;
};
