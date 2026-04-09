/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

interface ImportMetaEnv {
  readonly VITE_API_URL?: string;
  readonly VITE_ANALYTICS_ID?: string;
  readonly VITE_ENABLE_COMMENTS?: string;
  readonly VITE_CONTACT_EMAIL?: string;
  readonly VITE_GITHUB_URL?: string;
  readonly VITE_YOUTUBE_URL?: string;
  readonly VITE_INSTAGRAM_URL?: string;
  readonly VITE_LINKEDIN_URL?: string;
  readonly VITE_WHATSAPP_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
