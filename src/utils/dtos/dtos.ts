export interface HTTPControllerDto {
  status: number;
  message: string;
  details?: string;
  data?: any;
  error?: boolean;
}

export interface ServiceDto {
  error: boolean;
  data?: any;
  message?: string;
  httpStatus?: number;
}