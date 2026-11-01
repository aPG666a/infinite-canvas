// Separate local project/media/API configuration for each LikeAI account.
// This is local persistence, not server-side authorization or cloud sync.
const account = new URLSearchParams(window.location.search).get("account");
export const canvasStorageName = `likeai-canvas:${account && /^\d+$/.test(account) ? account : "standalone"}`;
