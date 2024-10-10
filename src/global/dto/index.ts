import { StatusCodes } from "../enums";

export interface IResponseData<TData> {
  data: TData;
  status: StatusCodes;
  message: string;
  description?: string;
  errors?: { [key: string]: any }[];
  redirect?: {
    path: string;
  };
  fieldsModified?: number;
  documentsModified?: number;
}

export interface IResponseDataPaginated extends IResponseData<unknown> {
  page: number;
  limit: number;
  filterCount: number;
  totalCount?: number;
}