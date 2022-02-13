/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_COUNTRIES_URL: string
  readonly VITE_CITIES_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}