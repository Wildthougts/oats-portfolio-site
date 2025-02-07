import { createClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID environment variable')
}

if (!dataset) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET environment variable')
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: apiVersion || '2024-03-13',
  useCdn: false, // set to false if you want to ensure fresh data
  perspective: 'published',
}) 