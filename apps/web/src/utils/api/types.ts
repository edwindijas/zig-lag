export interface ApiError {
  message: string;
  code?: string | number;
  status?: number;
  details?: unknown
}

export interface ApiSuccess<T> {
  data: T;
  success: true;
  getData: () => T
}

export interface ApiFailed {
  error: ApiError;
  success: false;
  getError: () => ApiError
}

export type ApiResponse<T> = ApiSuccess<T> | ApiFailed;
