import { SysError } from './base-error';

export class UnAuthorisedError extends SysError {
  constructor(message = '') {
    super(message);
    this.code = 401;
    this.name = 'FORBIDDEN';
  }
}
