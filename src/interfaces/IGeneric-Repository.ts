export abstract class IGenericRepository<T> {
  abstract create(data: T): Promise<T | null>
  abstract update(data: T): Promise<T | null>
  abstract delete(id: string): Promise<T | null>
  abstract findOne(id: string): Promise<T | null>
  abstract findAll(): Promise<T[] | null>
}