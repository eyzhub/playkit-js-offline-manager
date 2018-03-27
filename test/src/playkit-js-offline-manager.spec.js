import '../../src/index.js'
import {loadPlayer} from 'playkit-js'
import * as TestUtils from 'playkit-js/test/src/utils/test-utils'

const targetId = 'player-placeholder_offline-manager.spec';

describe('OfflineManager', function () {
  const config = {
    sources: {
      dash: [
        {
          mimetype: "video/mp4",
          url: "http://www.html5videoplayer.net/videos/toystory.mp4"
        }
      ]
    }
  };

  before(function () {
  });

  afterEach(function () {
  });

  after(function () {
  });

  it('should play mp4 stream with offline-manager plugin', (done) => {
    done();
  });
});
