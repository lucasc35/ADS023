package br.iesb.ads023.atividade11

import android.app.Activity
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.ComponentActivity
import androidx.core.app.ComponentActivity.ExtraData
import androidx.core.content.ContextCompat.getSystemService
import android.icu.lang.UCharacter.GraphemeClusterBreak.T



class MainActivity :AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        println("onCreate disparado...")
        setContentView(R.layout.activity_main)
    }
    override fun onStart() {
 super.onStart()
        println("onStart disparado...")
 }
    override fun onResume() {
 super.onResume()
        println("onResume disparado...")
 }
    override fun onPause() {
 super.onPause()
        println("onPause disparado...")
 }
    override fun onStop() {
 super.onStop()
        println("onStop disparado...")
 }
    override fun onDestroy() {
 super.onDestroy()
        println("onDestroy disparado...")
 }

}