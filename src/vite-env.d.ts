// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_URL: string
  readonly VITE_PROXY_BASE_URL: string
  readonly VITE_PROXY_PREFIX: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
