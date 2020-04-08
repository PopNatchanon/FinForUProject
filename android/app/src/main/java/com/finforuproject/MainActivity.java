package com.finforuproject;

import com.facebook.react.ReactActivity;
import com.google.firebase.analytics.FirebaseAnalytics;

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
}
