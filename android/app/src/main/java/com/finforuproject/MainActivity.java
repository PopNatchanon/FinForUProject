package com.finforuproject;

import com.facebook.react.ReactActivity;
import com.google.firebase.analytics.FirebaseAnalytics;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import org.devio.rn.splashscreen.SplashScreen; // Import this.
import android.os.Bundle; // Import this.


public class MainActivity extends ReactActivity {

    private FirebaseAnalytics mFirebaseAnalytics;
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
   @Override
    protected void onCreate(Bundle savedInstanceState) {
       mFirebaseAnalytics = FirebaseAnalytics.getInstance(this);
        SplashScreen.show(this);
        super.onCreate(savedInstanceState);
        
    }
    
  @Override
  protected String getMainComponentName() {
    return "FinForUProject";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
}
