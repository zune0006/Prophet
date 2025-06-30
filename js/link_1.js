var astrolabe = astro.bySolar("2000-8-16", 2, "女");

// 通过农历获取星盘信息
var astrolabe = astro.byLunar("2000-7-17", 2, "女", false);

astrolabe.horoscope(new Date());

import { HeavenlyStemName } from "iztro/lib/i18n";
import { Palace } from "iztro/lib/data/types";

import { setLanguage } from "iztro/lib/i18n";

setLanguage("ko-KR");

const horoscopeStar = getHoroscopeStar("甲", "zi", "decadal");

export type Language = `zh-CN` | `zh-TW` | `en-US` | `ko-KR` | `ja-JP`;

export type Scope = "origin" | "decadal" | "yearly";

export type StarType =
  | "major"
  | "soft"
  | "tough"
  | "adjective"
  | "flower"
  | "helper"
  | "lucun"
  | "tianma";


export type Star = {
  name: StarName;
  type: StarType;
  scope: Scope;
  brightness?: Brightness;
  mutagen?: Mutagen;
};


export type SoulAndBody = {
  soulIndex: number;
  bodyIndex: number;
  heavenlyStemOfSoul: HeavenlyStemName;
  earthlyBranchOfSoul: EarthlyBranchName;
};



