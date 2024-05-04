import { logger } from '../logger.shared';
import bunyan from 'bunyan';
import { BaseError } from './base.error';

export class ErrorHandler {
  logger: bunyan;

  constructor(logger: bunyan) {
    this.logger = logger;
  }

  /**
   * handles all the error related tasks, like sending emails, send notifications etc
   * @param {Error} err
   */
  public async handleError(err: Error): Promise<void> {
    logger.error(err);
  }

  /**
   * Checks whether the error is trusted i.e., operational error
   * @param {Error} error
   * @returns {boolean}
   */
  public isTrustedError(error: Error): boolean {
    return error instanceof BaseError && error.isOperational;
  }
}
