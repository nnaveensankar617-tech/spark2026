import { getTopKey, normalizeAnalyticsEvent, isValidDate } from '../../services/analyticsUtils';

describe('analyticsUtils', () => {
  describe('normalizeAnalyticsEvent', () => {
    it('should reject invalid event types', () => {
      const result = normalizeAnalyticsEvent({
        eventType: 'invalid' as any,
        eventId: 'evt1',
        userId: 'user1',
        timestamp: new Date(),
      });

      expect(result).toBeNull();
    });

    it('should trim userId and eventId and drop empty eventId', () => {
      const result = normalizeAnalyticsEvent({
        eventType: 'view',
        eventId: '   ',
        userId: '  user-1  ',
        timestamp: new Date(),
      });

      expect(result?.userId).toBe('user-1');
      expect(result?.eventId).toBeUndefined();
    });

    it('should ignore invalid device types and trim referral source', () => {
      const result = normalizeAnalyticsEvent({
        eventType: 'view',
        eventId: 'evt1',
        userId: 'user1',
        timestamp: new Date(),
        deviceType: 'console' as any,
        referralSource: '  instagram  ',
      });

      expect(result?.deviceType).toBeUndefined();
      expect(result?.referralSource).toBe('instagram');
    });
  });

  describe('getTopKey', () => {
    it('should return the key with the highest count', () => {
      const map = new Map<string, number>([
        ['a', 1],
        ['b', 5],
        ['c', 2],
      ]);

      expect(getTopKey(map)).toBe('b');
    });

    it('should return undefined for an empty map', () => {
      const map = new Map<string, number>();

      expect(getTopKey(map)).toBeUndefined();
    });
  });

  describe('isValidDate', () => {
    it('should return true for valid Date objects', () => {
      expect(isValidDate(new Date())).toBe(true);
    });

    it('should return false for invalid Date objects', () => {
      expect(isValidDate(new Date('invalid'))).toBe(false);
    });
  });
});
