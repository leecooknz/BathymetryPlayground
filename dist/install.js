(() => {
  const button = document.getElementById('install-app');
  let pendingPrompt = null;
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    pendingPrompt = event;
    if (!window.matchMedia('(display-mode: standalone)').matches) button.hidden = false;
  });
  button.addEventListener('click', async () => {
    if (!pendingPrompt) return;
    const prompt = pendingPrompt;
    pendingPrompt = null;
    button.hidden = true;
    try {
      await prompt.prompt();
      await prompt.userChoice;
    } catch (error) {
      console.warn('Installation prompt unavailable', error);
    }
  });
  window.addEventListener('appinstalled', () => {
    pendingPrompt = null;
    button.hidden = true;
  });
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js', { scope: '/', updateViaCache: 'none' })
        .catch(error => console.warn('App registration failed', error));
    });
  }
})();
