/**
 * Analytics Service - Summary Tests
 */

import { AnalyticsService } from '../../services/analyticsService';

describe('AnalyticsService - Summary', () => {
  let service: AnalyticsService;

  beforeEach(() => {
    service = new AnalyticsService();
  });

  it('should return a summary with peak hour and top sources', () => {
    const morning = new Date();
    morning.setHours(9, 15, 0, 0);
    const evening = new Date();
    evening.setHours(18, 45, 0, 0);

    service.track({
      eventType: 'view',
      eventId: 'evt1',
      userId: 'user1',
      timestamp: morning,
      deviceType: 'mobile',
      referralSource: 'google',
    });
    service.track({
      eventType: 'view',
      eventId: 'evt1',
      userId: 'user2',
      timestamp: morning,
      deviceType: 'mobile',
      referralSource: 'google',
    });
    service.track({
      eventType: 'view',
      eventId: 'evt1',
      userId: 'user3',
      timestamp: evening,
      deviceType: 'desktop',
      referralSource: 'instagram',
    });
    service.track({
      eventType: 'register',
      eventId: 'evt1',
      userId: 'user1',
      timestamp: evening,
    });

    const summary = service.getEventSummary('evt1');

    expect(summary.views).toBe(3);
    expect(summary.registrations).toBe(1);
    expect(summary.uniqueVisitors).toBe(3);
    expect(summary.conversionRate).toBeCloseTo(33.333, 2);
    expect(summary.topDeviceType).toBe('mobile');
    expect(summary.topReferralSource).toBe('google');
    expect(summary.peakHour).toBe(9);
  });

  it('should return empty summary values for unknown events', () => {
    const summary = service.getEventSummary('missing-event');

    expect(summary.views).toBe(0);
    expect(summary.registrations).toBe(0);
    expect(summary.uniqueVisitors).toBe(0);
    expect(summary.conversionRate).toBe(0);
    expect(summary.topDeviceType).toBeUndefined();
    expect(summary.topReferralSource).toBeUndefined();
    expect(summary.peakHour).toBeUndefined();
  });

  it('should ignore invalid events in summary calculations', () => {
    service.track({
      eventType: 'view',
      eventId: 'evt1',
      userId: 'user1',
      timestamp: new Date('invalid'),
    });
    service.track({
      eventType: 'view',
      eventId: 'evt1',
      userId: 'user2',
      timestamp: new Date(),
    });

    const summary = service.getEventSummary('evt1');
    expect(summary.views).toBe(1);
  });
});
