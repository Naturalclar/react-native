/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 * @flow strict-local
 */

'use strict';

import React from 'react';
import Text from '../../../Text/Text';
import View from '../../View/View';
import MaskedViewIOS from '../MaskedViewIOS';

import * as ReactNativeTestTools from '../../../Utilities/ReactNativeTestTools';

describe('<MaskedViewIOS />', () => {
  it('should render as expected', () => {
    ReactNativeTestTools.expectRendersMatchingSnapshot(
      'MaskedViewIOS',
      () => (
        <MaskedViewIOS
          maskElement={
            <View>
              <Text>Basic Mask</Text>
            </View>
          }>
          <View />
        </MaskedViewIOS>
      ),
      () => {
        jest.dontMock('../MaskedViewIOS');
      },
    );
  });
});
