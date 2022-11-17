/**
 * Design Tokens
 * Autogenerated from tokens.json.
 * DO NOT EDIT!
 */

import {
  ColorToken,
  ParsedColorToken,
} from '@cobalt-ui/core';

export declare const tokens: {
  'color.black': ColorToken['$value'];
  'color.blue.10': ColorToken['$value'];
  'color.blue.20': ColorToken['$value'];
  'color.blue.30': ColorToken['$value'];
  'color.blue.40': ColorToken['$value'];
  'color.blue.50': ColorToken['$value'];
  'color.blue.60': ColorToken['$value'];
  'color.blue.70': ColorToken['$value'];
  'color.blue.80': ColorToken['$value'];
  'color.blue.90': ColorToken['$value'];
  'color.blue.100': ColorToken['$value'];
  'color.blue.00': ColorToken['$value'];
  'color.white': ColorToken['$value'];
  'ui.fg': ColorToken['$value'];
  'ui.bg': ColorToken['$value'];
};

export declare const meta: {
  'color.black': ParsedColorToken;
  'color.blue.10': ParsedColorToken;
  'color.blue.20': ParsedColorToken;
  'color.blue.30': ParsedColorToken;
  'color.blue.40': ParsedColorToken;
  'color.blue.50': ParsedColorToken;
  'color.blue.60': ParsedColorToken;
  'color.blue.70': ParsedColorToken;
  'color.blue.80': ParsedColorToken;
  'color.blue.90': ParsedColorToken;
  'color.blue.100': ParsedColorToken;
  'color.blue.00': ParsedColorToken;
  'color.white': ParsedColorToken;
  'ui.fg': ParsedColorToken & { $extensions: { mode: typeof modes['ui.fg'] } };
  'ui.bg': ParsedColorToken & { $extensions: { mode: typeof modes['ui.bg'] } };
};

export declare const modes: {
  'ui.fg': {
    light: ColorToken['$value'];
    dark: ColorToken['$value'];
  };
  'ui.bg': {
    light: ColorToken['$value'];
    dark: ColorToken['$value'];
  };
};

export declare function token(tokenID: keyof typeof tokens, modeName?: never): typeof tokens[typeof tokenID];
export declare function token(tokenID: keyof typeof modes, modeName?: keyof typeof modes[typeof tokenID]): typeof modes[typeof tokenID];
