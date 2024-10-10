import { IResponseData, IResponseDataPaginated } from "../dto";

export abstract class BaseUseCase<Input, Output> {
  abstract execute(
    input: Input
  ): Promise<IResponseData<Output> | IResponseDataPaginated>;
}
