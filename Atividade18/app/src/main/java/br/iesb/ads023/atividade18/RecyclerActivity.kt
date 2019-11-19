package br.iesb.ads023.atividade18

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.RecyclerView

class RecyclerActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_recycler)
        setTitle("Recycler")
        val lista: List<String> = listOf<String>("Asa Sul", "Asa Norte", "Sudoeste", "Noroeste", "Lago Sul", "Lago Norte", "Aguas Claras", "Candangolandia", "Nucleo Bandeirantes", "Vicentes Pires", "Taguatinga", "Ceilandia", "Samambaia")
        val recyclerView = findViewById(R.id.recycler) as RecyclerView
    }
}
