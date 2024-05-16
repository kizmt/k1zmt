const TEXT_SPEED = 1000 / 30;
const CHARS_TO_WRITE_PER_FRAME = 2;

function escapeHtml(str: string): string {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function breakLines(str: string): string {
  return escapeHtml(str).replace(/(\r\n|\n|\r)/gm, '<br>');
}

function wrapNode(node: Node): void {
  if (node.nodeType === 3 && node.textContent && node.textContent.trim().length !== 0) {
    wrapTextNode(node as Text);
  } else {
    Array.from(node.childNodes).forEach(childNode => {
      wrapNode(childNode);
    });
  }
}

function wrapTextNode(textNode: Text): void {
  const spanNode = document.createElement('span');
  spanNode.setAttribute('class', 'text hidden');
  const newTextNode = document.createTextNode(textNode.textContent || '');
  spanNode.appendChild(newTextNode);

  if (textNode.parentNode) {
    textNode.parentNode.replaceChild(spanNode, textNode);

    const visibleSpanNode = document.createElement('span');
    visibleSpanNode.setAttribute('class', 'text visible');
    spanNode.parentNode?.insertBefore(visibleSpanNode, spanNode);
  }
}

function writeText(element: HTMLElement, onComplete?: () => void): void {
  const visibleSpans = element.querySelectorAll('.text.visible');
  const hiddenSpans = element.querySelectorAll('.text.hidden');
  if (visibleSpans.length === 0) {
    return;
  }
  let index = 0;
  const timeout = setInterval(() => {
    const visibleSpan = visibleSpans[index] as HTMLSpanElement;
    const hiddenSpan = hiddenSpans[index] as HTMLSpanElement;
    const visibleText = visibleSpan.textContent || '';
    const hiddenText = hiddenSpan.textContent || '';
    const nextChar = hiddenText.slice(visibleText.length, visibleText.length + CHARS_TO_WRITE_PER_FRAME);

    if (nextChar) {
      visibleSpan.textContent = visibleText + nextChar;
    } else {
      index++;
      if (index === visibleSpans.length) {
        clearInterval(timeout);
        if (onComplete) {
          onComplete();
        }
      }
    }
  }, TEXT_SPEED);
}

export function init(element: HTMLElement): void {
  wrapNode(element);
}

export function animateText(element: HTMLElement, onComplete?: () => void): void {
  writeText(element, onComplete);
}

export function formatText(text: string): string {
  return breakLines(text);
}
