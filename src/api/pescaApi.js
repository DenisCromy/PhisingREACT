import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function Pescaria(senhaAt, novaSenha) {
    const resposta = await api.post('/senhas', {

        vesenha: senhaAt,
        nosenha: novaSenha

    })

    return resposta.data
}