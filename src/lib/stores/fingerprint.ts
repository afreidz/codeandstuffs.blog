import { browser } from "$app/env";
import { writable } from "svelte/store";
import fp from "@fingerprintjs/fingerprintjs";
const fingerprint = writable(null);

if (browser) {
  const { visitorId } = await (await fp.load()).get();
  fingerprint.set(visitorId);
}

export default fingerprint;
