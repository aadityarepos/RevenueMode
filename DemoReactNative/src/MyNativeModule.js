'use strict'

import { NativeModules } from 'react-native';
module.exports = {
  MyToast: NativeModules.MyAndroidToast,
  MyIOSModule: NativeModules.MyCalenderManager
}
