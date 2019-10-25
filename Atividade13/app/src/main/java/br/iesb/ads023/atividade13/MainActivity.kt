package br.iesb.ads023.atividade13

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.view.Menu
import android.view.MenuItem

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        val inflater = menuInflater
        inflater.inflate(R.menu.main_menu, menu)
        return true
    }
    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.getItemId()) {
            R.id.notas -> {
                val intencao = Intent(this@MainActivity, NotaActivity::class.java)
                startActivity(intencao)
                return true
            }
            R.id.faltas -> {
                val intencao = Intent(this@MainActivity, FaltaActivity::class.java)
                startActivity(intencao)
                return true
            }
            R.id.requerimentos -> {
                val intencao = Intent(this@MainActivity, RequerimentoActivity::class.java)
                startActivity(intencao)
                return true
            }
            else -> return super.onOptionsItemSelected(item)
        }
    }
}
