import { ID } from "../types";

export abstract class BaseRepository<TData> {
  abstract create(data: TData | TData[]): Promise<TData | TData[]>;
  abstract update(id: ID, data: Partial<TData>): Promise<TData>;
  abstract delete(id: ID): Promise<boolean>;
  abstract query(
    filter: qs.ParsedQs,
    options: qs.IParseOptions
  ): Promise<TData[]>;
}
