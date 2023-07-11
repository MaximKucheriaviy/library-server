export interface AppError {
  message: string;
  status: number;
}

export const createAppError = (error: AppError): never => {
  throw error;
};
