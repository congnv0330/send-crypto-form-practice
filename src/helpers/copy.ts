export function copyToClipboard(text: string) {
  if (!navigator.clipboard) {
    // For browsers that don't support the Clipboard API, fallback to execCommand method
    const textArea = document.createElement('textarea');
    textArea.value = text;

    document.body.appendChild(textArea);

    textArea.select();

    document.execCommand('copy');
    document.body.removeChild(textArea);

    return Promise.resolve();
  } else {
    return navigator.clipboard.writeText(text);
  }
}
