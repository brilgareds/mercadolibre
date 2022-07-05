export default class BadRequestException extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, BadRequestException);
    }

    this.name = 'BadRequestException';
  }
}
