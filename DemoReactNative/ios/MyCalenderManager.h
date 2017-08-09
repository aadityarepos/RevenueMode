//
//  MyCalenderManager.h
//  DemoReactNative
//
//  Created by Vipin Joshi on 01/08/17.
//  Copyright © 2017 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTConvert.h>

@interface MyCalenderManager : NSObject<RCTBridgeModule>

- (void)addEvent:(NSString *)name details:(NSDictionary *)dict callBack:(RCTResponseSenderBlock)callback;

@end
