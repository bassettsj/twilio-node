'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('SegmentMembership', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {
        segment: 'segment'
      };
      var promise = client.notify.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .users('NUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .segmentMemberships.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        identity: 'NUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };
      var url = _.template('https://notify.twilio.com/v1/Services/<%= serviceSid %>/Users/<%= identity %>/SegmentMemberships')(solution);

      var values = {
        Segment: 'segment',
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'identity',
          'segment': 'segment',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://notify.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/identity/SegmentMemberships/segment'
      });

      holodeck.mock(new Response(201, body));

      var opts = {
        segment: 'segment'
      };
      var promise = client.notify.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .users('NUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .segmentMemberships.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.notify.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .users('NUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .segmentMemberships('segment').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        identity: 'NUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        segment: 'segment'
      };
      var url = _.template('https://notify.twilio.com/v1/Services/<%= serviceSid %>/Users/<%= identity %>/SegmentMemberships/<%= segment %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.notify.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .users('NUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .segmentMemberships('segment').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.notify.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .users('NUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .segmentMemberships('segment').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        serviceSid: 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        identity: 'NUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        segment: 'segment'
      };
      var url = _.template('https://notify.twilio.com/v1/Services/<%= serviceSid %>/Users/<%= identity %>/SegmentMemberships/<%= segment %>')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'identity': 'identity',
          'segment': 'segment',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'url': 'https://notify.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Users/identity/SegmentMemberships/segment'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.notify.v1.services('ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .users('NUaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                                    .segmentMemberships('segment').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});

