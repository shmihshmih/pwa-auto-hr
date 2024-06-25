/**
 * Helps dinamically load js scripts (for example, useDesk chat with different languages)
 * @param url string
 * @param onloadFnc
 */
export function loadScript(url: string, onloadFnc?: () => void): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const body = document.body;
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (onloadFnc) {
        onloadFnc();
      }
      resolve(true);
    };
    script.onerror = () => {
      reject(new Error(`Script load error for ${url}`));
    };
    body.appendChild(script);
  });
}
