import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { dataset, projectId } from './sanity.client'

if (!projectId || !dataset) {
  throw new Error('Missing Sanity project ID or dataset. Check your environment variables.')
}

const imageBuilder = createImageUrlBuilder({
  projectId,
  dataset,
})

export const urlForImage = (source: Image | undefined) => {
  if (!source?.asset?._ref) {
    return ''
  }

  return imageBuilder.image(source).auto('format').fit('max').url()
} 