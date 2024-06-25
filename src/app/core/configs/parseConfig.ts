// parseConfig.js
import Parse from 'parse';

// Экспортируем Parse для использования в других частях приложения
export { Parse };

// Экспортируем сеттер для serverURL
export function setServerURL(url: string) {
  Parse.serverURL = url;
} 