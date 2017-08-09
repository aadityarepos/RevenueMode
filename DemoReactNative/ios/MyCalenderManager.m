//
//  MyCalenderManager.m
//  DemoReactNative
//
//  Created by Vipin Joshi on 01/08/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import "MyCalenderManager.h"

@implementation MyCalenderManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(addEvent:(NSString *)name details:(NSDictionary *)dict callBack:(RCTResponseSenderBlock)callback) {
  NSString *location = [RCTConvert NSString:dict[@"location"]];
  NSDate *data = [RCTConvert NSDate:dict[@"time"]];
  
  NSArray *events = @[name, location, data];
  callback(@[[NSNull null], events]);
}

@end
