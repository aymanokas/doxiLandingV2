import { siteConfig } from '../config/site'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const doxiLink = 'https://bit.ly/doxi-1-1-23'
export const assistantLink = 'https://bit.ly/doc-assistant'

export const handleDownloadApps = () => {
  window.location.href = siteConfig.links.download
}
