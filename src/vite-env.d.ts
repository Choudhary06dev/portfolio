/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
  readonly VITE_SITE_NAME: string;
  readonly VITE_CONTACT_API_URL: string;
  readonly VITE_CONTACT_FORM_KEY: string;
  readonly VITE_ANALYTICS_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
