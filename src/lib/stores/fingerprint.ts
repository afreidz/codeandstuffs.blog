import { browser } from "$app/env";
import { writable } from "svelte/store";
import fp from "@fingerprintjs/fingerprintjs";
const fingerprint = writable(null);

if (browser) {
  fp.load()
    .then((agent) => agent.get())
    .then((result) => {
      fingerprint.set(result.visitorId);
    });
}

export default fingerprint;
