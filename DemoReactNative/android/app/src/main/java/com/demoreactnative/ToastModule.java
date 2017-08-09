package com.demoreactnative;

import android.util.DisplayMetrics;
import android.widget.Toast;
import android.provider.Settings;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Nullable;

/**
 * Created by vipinjoshi on 01/08/17.
 */

public class ToastModule extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyAndroidToast";
    }

    @Nullable
    @Override
    public Map<String, Object> getConstants() {
        final Map<String,Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String msg, int duration) {
        Toast.makeText(getReactApplicationContext(), msg, duration).show();
    }

    @ReactMethod
    public void measureScreen(Promise promise) {
        DisplayMetrics displayMetrics = new DisplayMetrics();
        if (getCurrentActivity() != null) {
            getCurrentActivity().getWindowManager().getDefaultDisplay().getMetrics(displayMetrics);
            int height = displayMetrics.heightPixels;
            int width = displayMetrics.widthPixels;

            WritableMap map = Arguments.createMap();
            map.putInt("height",height);
            map.putInt("width",width);

            promise.resolve(map);
            //success.invoke(height,width);
        } else {
            promise.reject("Current activity is null","");
            //failure.invoke("Current activity is null");
        }
    }

    @ReactMethod
    public void getDeviceID(Callback callback) {
      String deviceID = Settings.Secure.getString(getCurrentActivity().getContentResolver(),
             Settings.Secure.ANDROID_ID);

      callback.invoke(deviceID);
    }

    private void sendEvent(ReactContext context, String eventName,@Nullable WritableMap params) {
        context.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class).emit(eventName, params);
    }

    @ReactMethod
    public void myEventCheckForKeyboard() {
        WritableMap map = Arguments.createMap();
        map.putInt("height",20);
        map.putInt("width",30);
        sendEvent(getReactApplicationContext(),"MyTestEvent",map);
    }
}
