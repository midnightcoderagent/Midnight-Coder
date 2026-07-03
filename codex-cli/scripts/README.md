# npm releases

Use the staging helper in the repo root to generate npm tarballs for a release. For
example, to stage the CLI and responses proxy packages for version `0.6.0`:

```bash
./scripts/stage_npm_packages.py \
  --release-version 0.6.0 \
  --package midnight-coder \
  --package codex-responses-api-proxy
```

This downloads the required native package archive artifacts, hydrates `vendor/` for
each package, and writes tarballs to `dist/npm/`.

When `--package midnight-coder` is provided, the staging helper builds the
`midnight-coder` root package plus all platform-native `midnight-coder`
variants that are later published under platform-specific dist-tags.

Direct `build_npm_package.py` invocations are still useful for package-specific
debugging, but native packages expect `--vendor-src` to point at a prehydrated
`vendor/` tree. Release packaging should use `scripts/stage_npm_packages.py`.
