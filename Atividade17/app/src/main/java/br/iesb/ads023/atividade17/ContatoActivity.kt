package br.iesb.ads023.atividade17

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.Button
import android.widget.Toast
import android.widget.EditText
import androidx.core.app.ComponentActivity.ExtraData
import androidx.core.content.ContextCompat.getSystemService
import android.os.PatternMatcher
import android.util.Patterns


class ContatoActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contato)
        setTitle("Novo contato")
        val botao = findViewById(R.id.button) as Button

        botao.setOnClickListener {
            salvar()
        }
    }

    fun validar(): Boolean {
        var ok = true
        val nome = findViewById(R.id.nome) as EditText
        if (nome.getText().toString().length == 0) {
            nome.setError("Campo obrigatório!")
            ok = false
        }
        if (nome.getText().toString().length < 5) {
            nome.setError("Campo deve conter no mínimo 5 caracteres !")
            ok = false
        }
        val email = findViewById(R.id.email) as EditText
        if (email.getText().toString().length == 0) {
            email.setError("Campo obrigatório!")
            ok = false
        }

        if (Patterns.EMAIL_ADDRESS.matcher(email.getText().toString()).matches() == false) {
            email.setError("Formato inválido!")
            ok = false
        }
        val telefone = findViewById(R.id.telefone) as EditText
        if (telefone.getText().toString().length == 0) {
            telefone.setError("Campo obrigatório!")
            ok = false
        }
        return ok
    }

    fun salvar() {
        val toast = Toast.makeText(this, "Contato Salvo!", Toast.LENGTH_SHORT)
        if (validar()) {
            toast.show()
        }


    }
}
