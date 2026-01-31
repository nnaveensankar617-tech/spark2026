import type { AnalyticsEvent } from './analyticsService';

const allowedEventTypes = ['view', 'click', 'register', 'share'] as const;
const allowedDeviceTypes = ['mobile', 'tablet', 'desktop'] as const;

export function isValidDate(value: Date): boolean {
  return value instanceof Date && !Number.isNaN(value.getTime());
}

export function getTopKey(map: Map<string, number>): string | undefined {
  let topKey: string | undefined;
  let topCount = -1;

  map.forEach((count, key) => {
    if (count > topCount) {
      topKey = key;
      topCount = count;
    }
  });

  return topKey;
}

function normalizeOptionalString(value: string | undefined, maxLength: number = 120): string | undefined {
  if (value === undefined) return undefined;
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  return trimmed.length > maxLength ? trimmed.slice(0, maxLength) : trimmed;
}

function normalizeRequiredString(value: string | undefined, maxLength: number = 120): string | null {
  const trimmed = normalizeOptionalString(value, maxLength);
  return trimmed ?? null;
}

function normalizeDeviceType(value: AnalyticsEvent['deviceType']): AnalyticsEvent['deviceType'] {
  if (!value) return undefined;
  return allowedDeviceTypes.includes(value) ? value : undefined;
}

function normalizeEventType(value: AnalyticsEvent['eventType']): AnalyticsEvent['eventType'] | null {
  if (!value) return null;
  return allowedEventTypes.includes(value) ? value : null;
}

export function normalizeAnalyticsEvent(event: AnalyticsEvent): AnalyticsEvent | null {
  const eventType = normalizeEventType(event.eventType);
  if (!eventType) return null;

  const userId = normalizeRequiredString(event.userId, 80);
  if (!userId) return null;

  if (!isValidDate(event.timestamp)) return null;

  const eventId = normalizeOptionalString(event.eventId, 80);
  const referralSource = normalizeOptionalString(event.referralSource, 64);
  const deviceType = normalizeDeviceType(event.deviceType);

  return {
    ...event,
    eventType,
    userId,
    eventId,
    referralSource,
    deviceType,
  };
}
