import { SysError } from '@/src/common/errors/base-error';

export class UserAlreadyExistsError extends SysError {
  constructor(message = 'User already exists') {
    super(message, 409, 'USER_ALREADY_EXISTS');
  }
}
