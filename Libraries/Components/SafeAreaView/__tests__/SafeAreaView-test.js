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
import SafeAreaView from '../SafeAreaView';
import * as ReactNativeTestTools from '../../../Utilities/ReactNativeTestTools';
import View from '../../View/View';
import Text from '../../../Text/Text';

describe('<SafeAreaView />', () => {
  it('should render as expected', () => {
    ReactNativeTestTools.expectRendersMatchingSnapshot(
      'SafeAreaView',
      () => (
        <SafeAreaView>
          <View>
            <Text>Hello World!</Text>
          </View>
        </SafeAreaView>
      ),
      () => {
        jest.dontMock('../SafeAreaView');
      },
    );
  });
});
