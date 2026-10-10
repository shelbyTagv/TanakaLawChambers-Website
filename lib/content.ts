import { backgrounds } from '@/content/backgrounds';
import { footer } from '@/content/footer';
import { faqs } from '@/content/faqs';
import { navigation } from '@/content/navigation';
import { news, publishedNews } from '@/content/news';
import { pageList, pages } from '@/content/pages';
import { reviews, approvedReviews } from '@/content/reviews';
import { services, serviceMap } from '@/content/services';
import { settings } from '@/content/settings';
import { strings } from '@/content/strings';
import { team, teamMap } from '@/content/team';
import type { NewsArticle, PageRecord, ReviewRecord, ServiceRecord, TeamMember } from '@/content/types';

export function getSetting(key: keyof typeof settings) {
  return settings[key];
}

export function getPage(slug: string): PageRecord | undefined {
  return pages[slug];
}

export function getPages() {
  return pageList;
}

export function getServices(): ServiceRecord[] {
  return [...services].sort((a, b) => a.order - b.order);
}

export function getService(slug: string): ServiceRecord | undefined {
  return serviceMap[slug];
}

export function getTeam(): TeamMember[] {
  return [...team].sort((a, b) => a.order - b.order);
}

export function getTeamMember(slug: string): TeamMember | undefined {
  return teamMap[slug];
}

export function getReviews(): ReviewRecord[] {
  return [...reviews].sort((a, b) => a.order - b.order);
}

export function getApprovedReviews(): ReviewRecord[] {
  return [...approvedReviews].sort((a, b) => a.order - b.order);
}

export function getNews(): NewsArticle[] {
  return [...news].sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate));
}

export function getPublishedNews(): NewsArticle[] {
  return [...publishedNews].sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate));
}

export function getFaqs() {
  return faqs;
}

export function getNavigation() {
  return navigation;
}

export function getFooter() {
  return footer;
}

export function getBackgrounds() {
  return backgrounds;
}

export function getStrings() {
  return strings;
}
