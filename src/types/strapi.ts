/**
 * Strapi API Response Types
 *
 * These types match Strapi's response format for easy transition
 * from mock data to real Strapi backend
 */

export interface StrapiResponse<T> {
  data: T
  meta?: StrapiMeta
}

export interface StrapiEntity<T> {
  id: number
  attributes: T
}

export interface StrapiMeta {
  pagination?: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

// Collection response (multiple items)
export type StrapiCollectionResponse<T> = StrapiResponse<StrapiEntity<T>[]>

// Single type response (one item)
export type StrapiSingleResponse<T> = StrapiResponse<StrapiEntity<T>>
