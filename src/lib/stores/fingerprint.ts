import "$lib/types/clientjs.d.ts";
import { browser } from "$app/env";
import { ClientJS } from "clientjs/dist/client.base.min";
import { writable } from "svelte/store";
const fingerprint = writable(null);

if (browser) {
  const client = new ClientJS();
  fingerprint.set(client.getFingerprint());
}

export default fingerprint;
