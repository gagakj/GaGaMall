package com.gagamall.wxapi;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import com.theweflex.react.WeChatModule;

public class WXEntryActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        WeChatModule.handleIntent(getIntent());
        finish();
    }
}
