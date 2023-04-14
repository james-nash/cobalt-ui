/**
 * Design Tokens
 * Autogenerated from tokens.json.
 * DO NOT EDIT!
 */

import {ColorToken, ParsedColorToken} from '@cobalt-ui/core';

export declare const tokens: {
  'color.blue': ColorToken['$value'];
  'color.red': ColorToken['$value'];
};

export declare const meta: {
  'color.blue': ParsedColorToken;
  'color.red': ParsedColorToken & {$extensions: {mode: (typeof modes)['color.red']}};
};

export declare const modes: {
  'color.red': {
    light: ColorToken['$value'];
    dark: ColorToken['$value'];
  };
};

export declare function token<K extends keyof typeof tokens>(tokenID: K, modeName?: never): (typeof tokens)[K];
export declare function token<K extends keyof typeof modes, M extends keyof (typeof modes)[K]>(tokenID: K, modeName: M): (typeof modes)[K][M];
