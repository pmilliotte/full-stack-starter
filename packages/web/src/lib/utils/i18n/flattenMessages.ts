import { defineMessage } from 'react-intl';

type Message = string | NestedDictionary;
interface NestedDictionary {
  [x: string]: Message;
}
interface FlattenedDictionary {
  [x: string]: string;
}

export const flattenMessages = (
  nestedMessages: NestedDictionary,
  prefix = '',
): FlattenedDictionary =>
  Object.entries(nestedMessages).reduce(
    (messages: FlattenedDictionary, [key, value]) => {
      const prefixedKey = prefix !== '' ? `${prefix}.${key}` : key;

      if (typeof value === 'string') {
        messages[prefixedKey] = value;
        defineMessage({ id: prefixedKey, defaultMessage: value });
      } else {
        Object.assign(messages, flattenMessages(value, prefixedKey));
      }

      return messages;
    },
    {},
  );
