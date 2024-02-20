import { IGenericRepository } from "src/interfaces/IGeneric-Repository";

export abstract class IGymRepository<T> extends IGenericRepository<T> {
  abstract findEnabledGym(): Promise<T[] | null>
  abstract findDisabledGym(): Promise<T[] | null>
}
