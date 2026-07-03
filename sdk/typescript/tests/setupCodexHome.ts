import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { afterEach, beforeEach } from "@jest/globals";

const originalMidnightCoderHome = process.env.CODEX_HOME;
let currentMidnightCoderHome: string | undefined;

beforeEach(async () => {
  currentMidnightCoderHome = await fs.mkdtemp(path.join(os.tmpdir(), "codex-sdk-test-"));
  process.env.CODEX_HOME = currentMidnightCoderHome;
});

afterEach(async () => {
  const codexHomeToDelete = currentMidnightCoderHome;
  currentMidnightCoderHome = undefined;

  if (originalMidnightCoderHome === undefined) {
    delete process.env.CODEX_HOME;
  } else {
    process.env.CODEX_HOME = originalMidnightCoderHome;
  }

  if (codexHomeToDelete) {
    await fs.rm(codexHomeToDelete, { recursive: true, force: true });
  }
});
