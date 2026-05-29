export class SysError extends Error {
  public name: string;
  public message: string;
  public code: number;

  constructor(
    message: string = 'Something went wrong.',
    code: number = 500,
    name: string = 'INTERNAL_SERVER_ERROR',
  ) {
    super();
    this.message = message;
    this.code = code;
    this.name = name;
  }
}
