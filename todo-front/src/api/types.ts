export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationErrorResponse {
  errors: ValidationError[];
}
