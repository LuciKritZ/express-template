import { HttpStatusCode } from '@/types';
import { BaseError } from './base.error';

export class ApiError extends BaseError {
  constructor(message: string, methodName = '', httpCode = HttpStatusCode.INTERNAL_SERVER, isOperational = true) {
    super('', message, methodName, httpCode, isOperational);
  }
}
