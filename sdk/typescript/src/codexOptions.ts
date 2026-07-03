export type MidnightCoderConfigValue = string | number | boolean | MidnightCoderConfigValue[] | MidnightCoderConfigObject;

export type MidnightCoderConfigObject = { [key: string]: MidnightCoderConfigValue };

export type MidnightCoderOptions = {
  codexPathOverride?: string;
  baseUrl?: string;
  apiKey?: string;
  /**
   * Additional `--config key=value` overrides to pass to the MidnightCoder.
   *
   * Provide a JSON object and the SDK will flatten it into dotted paths and
   * serialize values as TOML literals so they are compatible with the CLI's
   * `--config` parsing.
   */
  config?: MidnightCoderConfigObject;
  /**
   * Environment variables passed to the MidnightCoder process. When provided, the SDK
   * will not inherit variables from `process.env`.
   */
  env?: Record<string, string>;
};
